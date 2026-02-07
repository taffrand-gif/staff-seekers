CREATE TABLE `quote_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`city` varchar(100) NOT NULL,
	`address` text,
	`serviceType` varchar(100) NOT NULL,
	`urgency` enum('normal','urgent') NOT NULL DEFAULT 'normal',
	`description` text NOT NULL,
	`photoUrls` text,
	`status` enum('pending','quoted','accepted','rejected','completed') NOT NULL DEFAULT 'pending',
	`estimatedPrice` varchar(50),
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `quote_requests_id` PRIMARY KEY(`id`)
);
