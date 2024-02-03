import fs from 'fs-extra';
import { join } from 'path';

const loggerPath = join(process.cwd(), 'log/');

export enum LogLevel {
	Off = 0,
	Debug,
	Error,
	Warning,
	Info
}

export interface LoggerOptions {
	level?: LogLevel;
	timestamp?: boolean;
	targets?: LogTarget[];
}

type ConsoleLogTarget = {
	type: 'console';
};

type FileLogTarget = {
	type: 'file';
	options: {
		filename: string;
	};
};

export type LogTarget = ConsoleLogTarget | FileLogTarget;

export class Logger {
	private static instance: Logger | null = null;
	private level: LogLevel;
	private timestamp: boolean;
	private targets: LogTarget[];

	private constructor(options?: LoggerOptions) {
		this.level = options?.level ?? LogLevel.Info;
		this.timestamp = options?.timestamp ?? true;
		this.targets = options?.targets ?? [{ type: 'console' }];
	}

	public static getInstance(options?: LoggerOptions): Logger {
		if (!Logger.instance) {
			Logger.instance = new Logger(options);
		}
		return Logger.instance;
	}

	public setLevel(level: LogLevel): void {
		this.level = level;
	}

	public debug(...data: unknown[]): void {
		this.log(LogLevel.Debug, data);
	}

	public info(...data: unknown[]): void {
		this.log(LogLevel.Info, data);
	}

	public warn(...data: unknown[]): void {
		this.log(LogLevel.Warning, data);
	}

	public error(...data: unknown[]): void {
		this.log(LogLevel.Error, data);
	}

	private log(level: LogLevel, objects: unknown[]): void {
		if (level < this.level) {
			return;
		}

		const log = this.formatMessage(level, objects);
		this.targets.forEach((target) => {
			if (this.isFileLogTarget(target)) {
				this.logToFile(log, target.options.filename);
			} else {
				console.log(...log);
			}
		});
	}

	private formatMessage(level: LogLevel, objects: unknown[]): string[] {
		const log = this.timestamp ? [new Date().toISOString()] : [];
		log.push(`[${LogLevel[level]}]`, `[${this.getCaller()}]`);
		return log.concat(objects.map(String));
	}

	private getCaller(): string {
		const stack = new Error().stack?.split('\n');
		return stack?.[3] ? stack[3].trim() : ''; // Simplified for demonstration
	}

	private isFileLogTarget(target: LogTarget): target is FileLogTarget {
		return target.type === 'file';
	}

	private async logToFile(log: string[], filename: string): Promise<void> {
		const message = log.join(' ') + '\n';
		try {
			await fs.ensureDir(loggerPath);
			await fs.appendFile(join(loggerPath, filename), message, 'utf8');
		} catch (error) {
			console.error(`Failed to write log message to file: ${error}`);
		}
	}
}
