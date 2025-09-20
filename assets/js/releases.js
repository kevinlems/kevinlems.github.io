/*
	Releases data for Occasia website release notes page.
	Update this object to add/edit releases; the page renders automatically.
*/

window.RELEASES = [
	{
		version: "v2.0.0",
		month: "August 2025",
		title: "Major Platform Update - Current Release",
		sections: {
			newFeatures: [
				{
					group: "Multi-language Support",
					items: [
						"Internationalization framework",
						"English and French language support",
						"Localized content management",
						"Multi-language email templates"
					]
				},
				{
					group: "Advanced Payment Features",
					items: [
						"Multiple payment method support",
						"Payment method validation",
						"Advanced refund processing",
						"Payment analytics and reporting"
					]
				},
				{
					group: "Platform Integration",
					items: [
						"Webhook system for third-party integrations",
						"API rate limiting and management",
						"External service integration framework",
						"Real-time data synchronization"
					]
				},
				{
					group: "Mobile Optimization",
					items: [
						"Responsive design improvements",
						"Mobile-specific features",
						"Touch-optimized interfaces",
						"Mobile app preparation"
					]
				}
			],
			fixes: [
				"Complete platform stability overhaul",
				"Performance optimization across all features",
				"Security enhancements and vulnerability fixes",
				"User experience improvements throughout the platform",
				"Database optimization and query performance improvements"
			]
		}
	},
	{
		version: "v1.8.0",
		month: "July 2025",
		title: "Notification & Communication System",
		sections: {
			newFeatures: [
				{
					group: "Advanced Email System",
					items: [
						"Template-based email system",
						"Automated email workflows",
						"Email delivery tracking",
						"Custom email templates"
					]
				},
				{
					group: "Event Notification Queue",
					items: [
						"Scheduled notification system",
						"Notification job management",
						"Email delivery status tracking",
						"Notification cancellation system"
					]
				},
				{
					group: "Mailing List Management",
					items: [
						"Subscriber management",
						"Mailing list creation and management",
						"Automated subscription handling",
						"Email list analytics"
					]
				}
			],
			fixes: [
				"Email delivery reliability improvements",
				"Notification system performance optimization",
				"Mailing list management enhancements"
			]
		}
	},
	{
		version: "v1.7.0",
		month: "June 2025",
		title: "Advanced Analytics & Reporting",
		sections: {
			newFeatures: [
				{
					group: "Comprehensive Analytics Dashboard",
					items: [
						"Real-time event metrics",
						"Sales performance tracking",
						"Attendee analytics and insights",
						"Revenue trend analysis"
					]
				},
				{
					group: "Advanced Reporting",
					items: [
						"Custom date range reporting",
						"Export functionality (CSV, PDF)",
						"Organizer-specific analytics",
						"Event comparison tools"
					]
				},
				{
					group: "Sponsor Management",
					items: [
						"Sponsor tracking and analytics",
						"Sponsor view metrics",
						"Promoter management system",
						"Commission tracking"
					]
				}
			],
			fixes: [
				"Analytics data processing optimization",
				"Report generation performance improvements",
				"Dashboard loading speed enhancements"
			]
		}
	},
	{
		version: "v1.6.0",
		month: "May 2025",
		title: "Seating & Table Management",
		sections: {
			newFeatures: [
				{
					group: "Advanced Seating System",
					items: [
						"Seat assignment and management",
						"Table capacity and seating configuration",
						"Seat order tracking and validation",
						"Visual seating arrangement tools"
					]
				},
				{
					group: "Table Order Management",
					items: [
						"Table reservation system",
						"Seat count tracking per table",
						"Table order validation and management",
						"Table-specific pricing"
					]
				},
				{
					group: "Enhanced PDF Generation",
					items: [
						"Table-specific PDF generation",
						"Seating chart generation",
						"Improved PDF templates"
					]
				}
			],
			fixes: [
				"Seating system performance optimization",
				"Table management interface improvements",
				"PDF generation reliability enhancements"
			]
		}
	},
	{
		version: "v1.5.0",
		month: "April 2025",
		title: "Event Series & Recurring Events",
		sections: {
			newFeatures: [
				{
					group: "Event Series Management",
					items: [
						"Recurring event creation with RRULE support",
						"Automated event duplication for series",
						"Series management and editing",
						"Bulk event operations"
					]
				},
				{
					group: "Advanced Notifications",
					items: [
						"Event reminder email system",
						"Automated event update notifications",
						"iCalendar (ICS) file generation",
						"Scheduled email delivery"
					]
				},
				{
					group: "Enhanced Form Builder",
					items: [
						"Multiple question types support",
						"Form validation improvements",
						"Dynamic form rendering"
					]
				}
			],
			fixes: [
				"Event series synchronization improvements",
				"Email delivery reliability enhancements",
				"Form builder user experience improvements"
			]
		}
	},
	{
		version: "v1.4.0",
		month: "March 2025",
		title: "Marketing & Analytics Integration",
		sections: {
			newFeatures: [
				{
					group: "Marketing Pixel Integration",
					items: [
						"Meta (Facebook) pixel integration",
						"TikTok pixel integration",
						"Custom tracking configuration",
						"Marketing campaign analytics"
					]
				},
				{
					group: "Advanced Analytics",
					items: [
						"Event performance metrics",
						"Sales analytics and reporting",
						"Customer behavior tracking",
						"Revenue analytics dashboard"
					]
				},
				{
					group: "Customer Management",
					items: [
						"Customer metrics and insights",
						"Customer order history",
						"CSV export functionality for customer data"
					]
				}
			],
			fixes: [
				"Analytics data accuracy improvements",
				"Marketing pixel reliability enhancements",
				"Customer data export optimization"
			]
		}
	},
	{
		version: "v1.3.0",
		month: "February 2025",
		title: "QR Code & Validation System",
		sections: {
			newFeatures: [
				{
					group: "QR Code Scanner",
					items: [
						"Mobile-optimized QR code scanning interface",
						"Real-time ticket validation system",
						"Offline validation with local data caching",
						"Multiple validation status handling (Valid, Invalid, Already Validated, Refunded)"
					]
				},
				{
					group: "Attendance Management",
					items: [
						"Real-time attendance tracking",
						"Attendee validation and check-in system",
						"Attendance reports and analytics"
					]
				},
				{
					group: "Enhanced Security",
					items: [
						"Ticket validation security improvements",
						"Event-specific access controls",
						"Secure QR code generation"
					]
				}
			],
			fixes: [
				"QR code scanning accuracy improvements",
				"Mobile interface optimization",
				"Validation system performance enhancements"
			]
		}
	},
	{
		version: "v1.2.0",
		month: "January 2025",
		title: "Payment & Order Processing Enhancement",
		sections: {
			newFeatures: [
				{
					group: "Advanced Payment Features",
					items: [
						"Stripe Connect integration for organizer payouts",
						"Platform fee management and configuration",
						"Payment intent capture and manual processing",
						"Refund processing system"
					]
				},
				{
					group: "Order Management",
					items: [
						"Comprehensive order tracking and management",
						"Order status updates and notifications",
						"Guest order creation for non-registered users",
						"Order email notifications"
					]
				},
				{
					group: "Ticket PDF Generation",
					items: [
						"Automated ticket PDF generation",
						"QR code generation for ticket validation",
						"Email delivery of tickets to customers"
					]
				}
			],
			fixes: [
				"Payment processing reliability improvements",
				"Order email delivery optimization",
				"PDF generation performance enhancements"
			]
		}
	},
	{
		version: "v1.1.0",
		month: "December 2024",
		title: "Enhanced Event Management",
		sections: {
			newFeatures: [
				{
					group: "Advanced Event Settings",
					items: [
						"Event cover image upload and management",
						"Event location and venue details",
						"Event date and time management with timezone support",
						"Event description and additional details"
					]
				},
				{
					group: "Table Management System",
					items: [
						"Create and manage table reservations",
						"Table pricing and capacity management",
						"Table order tracking and validation"
					]
				},
				{
					group: "Basic Form Builder",
					items: [
						"Custom event registration forms",
						"Question creation and management",
						"Form response collection"
					]
				}
			],
			fixes: [
				"Improved event creation workflow",
				"Enhanced form validation",
				"Better error messaging for users"
			]
		}
	},
	{
		version: "v1.0.0",
		month: "November 2024",
		title: "Foundation Release - Core Platform Launch",
		sections: {
			newFeatures: [
				{
					group: "Event Management System",
					items: [
						"Create, edit, and manage events with comprehensive details",
						"Event state management (Draft, Published, Cancelled, Deleted)",
						"Event duplication functionality for recurring events",
						"Event metrics and analytics dashboard"
					]
				},
				{
					group: "Basic Ticketing System",
					items: [
						"Create and manage ticket types with pricing",
						"Ticket quantity management and availability tracking",
						"Basic ticket sales tracking"
					]
				},
				{
					group: "User Authentication & Profiles",
					items: [
						"Organizer account creation and management",
						"Profile customization with bio, website, and social links",
						"Profile picture upload with S3 integration"
					]
				},
				{
					group: "Payment Integration",
					items: [
						"Stripe payment processing integration",
						"Basic checkout flow for ticket purchases",
						"Order management and tracking"
					]
				}
			],
			fixes: [
				"Initial platform stability improvements",
				"Basic error handling implementation",
				"Database connection optimization"
			]
		}
	},
	{
		version: "Technical Improvements",
		month: "Across Releases",
		title: "Technical Improvements Throughout Releases",
		sections: {
			newFeatures: [
				{
					group: "Infrastructure",
					items: [
						"Database Optimization: Continuous improvement of database queries and indexing",
						"Caching System: Implementation of Redis-based caching for improved performance",
						"CDN Integration: Static asset delivery optimization",
						"Monitoring: Comprehensive logging and error tracking system"
					]
				},
				{
					group: "Security",
					items: [
						"Authentication: Enhanced session management and security",
						"Data Protection: Improved data encryption and privacy measures",
						"API Security: Rate limiting and request validation",
						"Audit Logging: Comprehensive activity tracking and monitoring"
					]
				},
				{
					group: "Performance",
					items: [
						"Load Optimization: Improved handling of concurrent users and requests",
						"Memory Management: Optimized memory usage and garbage collection",
						"Response Times: Reduced API response times across all endpoints",
						"Scalability: Platform architecture improvements for better scalability"
					]
				}
			],
			fixes: []
		}
	}
];


