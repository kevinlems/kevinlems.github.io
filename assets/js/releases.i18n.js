/*
	Bilingual releases data for Occasia website release notes page.
	Update this object to add/edit releases; the page renders automatically.
*/

window.RELEASES = [
	{
		version: "v2.0.0",
		month: { en: "August 2025", fr: "Août 2025" },
		title: { en: "Major Platform Update - Current Release", fr: "Mise à jour majeure de la plateforme - Version actuelle" },
		sections: {
			newFeatures: [
				{
					group: { en: "Multi-language Support", fr: "Prise en charge multilingue" },
					items: [
						{ en: "Internationalization framework", fr: "Cadre d'internationalisation" },
						{ en: "English and French language support", fr: "Support de l'anglais et du français" },
						{ en: "Localized content management", fr: "Gestion de contenu localisé" },
						{ en: "Multi-language email templates", fr: "Modèles d'e-mails multilingues" }
					]
				},
				{
					group: { en: "Advanced Payment Features", fr: "Fonctionnalités de paiement avancées" },
					items: [
						{ en: "Multiple payment method support", fr: "Prise en charge de plusieurs méthodes de paiement" },
						{ en: "Payment method validation", fr: "Validation des méthodes de paiement" },
						{ en: "Advanced refund processing", fr: "Traitement avancé des remboursements" },
						{ en: "Payment analytics and reporting", fr: "Analytique et rapports de paiement" }
					]
				},
				{
					group: { en: "Platform Integration", fr: "Intégration de la plateforme" },
					items: [
						{ en: "Webhook system for third-party integrations", fr: "Système de webhooks pour intégrations tierces" },
						{ en: "API rate limiting and management", fr: "Limitation et gestion du débit API" },
						{ en: "External service integration framework", fr: "Cadre d'intégration de services externes" },
						{ en: "Real-time data synchronization", fr: "Synchronisation des données en temps réel" }
					]
				},
				{
					group: { en: "Mobile Optimization", fr: "Optimisation mobile" },
					items: [
						{ en: "Responsive design improvements", fr: "Améliorations du design responsive" },
						{ en: "Mobile-specific features", fr: "Fonctionnalités spécifiques au mobile" },
						{ en: "Touch-optimized interfaces", fr: "Interfaces optimisées pour le tactile" },
						{ en: "Mobile app preparation", fr: "Préparation de l'application mobile" }
					]
				}
			],
			fixes: [
				{ en: "Complete platform stability overhaul", fr: "Refonte complète de la stabilité de la plateforme" },
				{ en: "Performance optimization across all features", fr: "Optimisation des performances sur toutes les fonctionnalités" },
				{ en: "Security enhancements and vulnerability fixes", fr: "Améliorations de sécurité et corrections de vulnérabilités" },
				{ en: "User experience improvements throughout the platform", fr: "Améliorations de l'expérience utilisateur sur toute la plateforme" },
				{ en: "Database optimization and query performance improvements", fr: "Optimisation de la base de données et des performances des requêtes" }
			]
		}
	},
	{
		version: "v1.8.0",
		month: { en: "July 2025", fr: "Juillet 2025" },
		title: { en: "Notification & Communication System", fr: "Système de notification et de communication" },
		sections: {
			newFeatures: [
				{
					group: { en: "Advanced Email System", fr: "Système d'e-mails avancé" },
					items: [
						{ en: "Template-based email system", fr: "Système d'e-mails basé sur des modèles" },
						{ en: "Automated email workflows", fr: "Flux d'e-mails automatisés" },
						{ en: "Email delivery tracking", fr: "Suivi de la délivrabilité des e-mails" },
						{ en: "Custom email templates", fr: "Modèles d'e-mails personnalisés" }
					]
				},
				{
					group: { en: "Event Notification Queue", fr: "File d'attente de notifications d'événements" },
					items: [
						{ en: "Scheduled notification system", fr: "Système de notifications planifiées" },
						{ en: "Notification job management", fr: "Gestion des tâches de notification" },
						{ en: "Email delivery status tracking", fr: "Suivi de l'état de livraison des e-mails" },
						{ en: "Notification cancellation system", fr: "Système d'annulation des notifications" }
					]
				},
				{
					group: { en: "Mailing List Management", fr: "Gestion des listes de diffusion" },
					items: [
						{ en: "Subscriber management", fr: "Gestion des abonnés" },
						{ en: "Mailing list creation and management", fr: "Création et gestion de listes de diffusion" },
						{ en: "Automated subscription handling", fr: "Gestion automatisée des abonnements" },
						{ en: "Email list analytics", fr: "Analytique des listes d'e-mails" }
					]
				}
			],
			fixes: [
				{ en: "Email delivery reliability improvements", fr: "Amélioration de la fiabilité de la délivrabilité des e-mails" },
				{ en: "Notification system performance optimization", fr: "Optimisation des performances du système de notifications" },
				{ en: "Mailing list management enhancements", fr: "Améliorations de la gestion des listes de diffusion" }
			]
		}
	},
	{
		version: "v1.7.0",
		month: { en: "June 2025", fr: "Juin 2025" },
		title: { en: "Advanced Analytics & Reporting", fr: "Analytique avancée et rapports" },
		sections: {
			newFeatures: [
				{
					group: { en: "Comprehensive Analytics Dashboard", fr: "Tableau de bord analytique complet" },
					items: [
						{ en: "Real-time event metrics", fr: "Mesures d'événements en temps réel" },
						{ en: "Sales performance tracking", fr: "Suivi des performances de ventes" },
						{ en: "Attendee analytics and insights", fr: "Analytique et insights sur les participants" },
						{ en: "Revenue trend analysis", fr: "Analyse des tendances de revenus" }
					]
				},
				{
					group: { en: "Advanced Reporting", fr: "Rapports avancés" },
					items: [
						{ en: "Custom date range reporting", fr: "Rapports avec plages de dates personnalisées" },
						{ en: "Export functionality (CSV, PDF)", fr: "Fonction d'export (CSV, PDF)" },
						{ en: "Organizer-specific analytics", fr: "Analytique spécifique aux organisateurs" },
						{ en: "Event comparison tools", fr: "Outils de comparaison d'événements" }
					]
				},
				{
					group: { en: "Sponsor Management", fr: "Gestion des sponsors" },
					items: [
						{ en: "Sponsor tracking and analytics", fr: "Suivi et analytique des sponsors" },
						{ en: "Sponsor view metrics", fr: "Mesures de visibilité des sponsors" },
						{ en: "Promoter management system", fr: "Système de gestion des promoteurs" },
						{ en: "Commission tracking", fr: "Suivi des commissions" }
					]
				}
			],
			fixes: [
				{ en: "Analytics data processing optimization", fr: "Optimisation du traitement des données analytiques" },
				{ en: "Report generation performance improvements", fr: "Améliorations des performances de génération de rapports" },
				{ en: "Dashboard loading speed enhancements", fr: "Amélioration de la vitesse de chargement du tableau de bord" }
			]
		}
	},
	{
		version: "v1.6.0",
		month: { en: "May 2025", fr: "Mai 2025" },
		title: { en: "Seating & Table Management", fr: "Gestion des places et des tables" },
		sections: {
			newFeatures: [
				{
					group: { en: "Advanced Seating System", fr: "Système de placement avancé" },
					items: [
						{ en: "Seat assignment and management", fr: "Attribution et gestion des places" },
						{ en: "Table capacity and seating configuration", fr: "Capacité des tables et configuration des places" },
						{ en: "Seat order tracking and validation", fr: "Suivi et validation des commandes de places" },
						{ en: "Visual seating arrangement tools", fr: "Outils visuels de plan de salle" }
					]
				},
				{
					group: { en: "Table Order Management", fr: "Gestion des réservations de tables" },
					items: [
						{ en: "Table reservation system", fr: "Système de réservation de tables" },
						{ en: "Seat count tracking per table", fr: "Suivi du nombre de places par table" },
						{ en: "Table order validation and management", fr: "Validation et gestion des commandes de table" },
						{ en: "Table-specific pricing", fr: "Tarification spécifique par table" }
					]
				},
				{
					group: { en: "Enhanced PDF Generation", fr: "Génération de PDF améliorée" },
					items: [
						{ en: "Table-specific PDF generation", fr: "Génération de PDF par table" },
						{ en: "Seating chart generation", fr: "Génération de plans de salle" },
						{ en: "Improved PDF templates", fr: "Modèles PDF améliorés" }
					]
				}
			],
			fixes: [
				{ en: "Seating system performance optimization", fr: "Optimisation des performances du système de placement" },
				{ en: "Table management interface improvements", fr: "Améliorations de l'interface de gestion des tables" },
				{ en: "PDF generation reliability enhancements", fr: "Améliorations de la fiabilité de la génération de PDF" }
			]
		}
	},
	{
		version: "v1.5.0",
		month: { en: "April 2025", fr: "Avril 2025" },
		title: { en: "Event Series & Recurring Events", fr: "Séries d’événements et événements récurrents" },
		sections: {
			newFeatures: [
				{
					group: { en: "Event Series Management", fr: "Gestion des séries d'événements" },
					items: [
						{ en: "Recurring event creation with RRULE support", fr: "Création d'événements récurrents avec support RRULE" },
						{ en: "Automated event duplication for series", fr: "Duplication automatisée d'événements pour les séries" },
						{ en: "Series management and editing", fr: "Gestion et modification des séries" },
						{ en: "Bulk event operations", fr: "Opérations d'événements en lot" }
					]
				},
				{
					group: { en: "Advanced Notifications", fr: "Notifications avancées" },
					items: [
						{ en: "Event reminder email system", fr: "Système d'e-mails de rappel d'événement" },
						{ en: "Automated event update notifications", fr: "Notifications automatiques de mise à jour d'événement" },
						{ en: "iCalendar (ICS) file generation", fr: "Génération de fichiers iCalendar (ICS)" },
						{ en: "Scheduled email delivery", fr: "Envoi d'e-mails planifié" }
					]
				},
				{
					group: { en: "Enhanced Form Builder", fr: "Générateur de formulaires amélioré" },
					items: [
						{ en: "Multiple question types support", fr: "Prise en charge de multiples types de questions" },
						{ en: "Form validation improvements", fr: "Améliorations de la validation des formulaires" },
						{ en: "Dynamic form rendering", fr: "Rendu dynamique des formulaires" }
					]
				}
			],
			fixes: [
				{ en: "Event series synchronization improvements", fr: "Améliorations de la synchronisation des séries d'événements" },
				{ en: "Email delivery reliability enhancements", fr: "Améliorations de la fiabilité d'envoi des e-mails" },
				{ en: "Form builder user experience improvements", fr: "Améliorations de l'UX du générateur de formulaires" }
			]
		}
	},
	{
		version: "v1.4.0",
		month: { en: "March 2025", fr: "Mars 2025" },
		title: { en: "Marketing & Analytics Integration", fr: "Intégration marketing et analytique" },
		sections: {
			newFeatures: [
				{
					group: { en: "Marketing Pixel Integration", fr: "Intégration de pixels marketing" },
					items: [
						{ en: "Meta (Facebook) pixel integration", fr: "Intégration du pixel Meta (Facebook)" },
						{ en: "TikTok pixel integration", fr: "Intégration du pixel TikTok" },
						{ en: "Custom tracking configuration", fr: "Configuration de suivi personnalisée" },
						{ en: "Marketing campaign analytics", fr: "Analytique des campagnes marketing" }
					]
				},
				{
					group: { en: "Advanced Analytics", fr: "Analytique avancée" },
					items: [
						{ en: "Event performance metrics", fr: "Mesures de performance des événements" },
						{ en: "Sales analytics and reporting", fr: "Analytique et rapports de ventes" },
						{ en: "Customer behavior tracking", fr: "Suivi du comportement des clients" },
						{ en: "Revenue analytics dashboard", fr: "Tableau de bord des revenus" }
					]
				},
				{
					group: { en: "Customer Management", fr: "Gestion de la clientèle" },
					items: [
						{ en: "Customer metrics and insights", fr: "Mesures et insights clients" },
						{ en: "Customer order history", fr: "Historique des commandes des clients" },
						{ en: "CSV export functionality for customer data", fr: "Export CSV des données clients" }
					]
				}
			],
			fixes: [
				{ en: "Analytics data accuracy improvements", fr: "Améliorations de la précision des données analytiques" },
				{ en: "Marketing pixel reliability enhancements", fr: "Améliorations de la fiabilité des pixels marketing" },
				{ en: "Customer data export optimization", fr: "Optimisation de l'export des données clients" }
			]
		}
	},
	{
		version: "v1.3.0",
		month: { en: "February 2025", fr: "Février 2025" },
		title: { en: "QR Code & Validation System", fr: "Système de QR code et validation" },
		sections: {
			newFeatures: [
				{
					group: { en: "QR Code Scanner", fr: "Scanner de QR code" },
					items: [
						{ en: "Mobile-optimized QR code scanning interface", fr: "Interface de scan de QR code optimisée pour mobile" },
						{ en: "Real-time ticket validation system", fr: "Système de validation des billets en temps réel" },
						{ en: "Offline validation with local data caching", fr: "Validation hors ligne avec mise en cache locale" },
						{ en: "Multiple validation status handling (Valid, Invalid, Already Validated, Refunded)", fr: "Gestion de multiples statuts de validation (Valide, Invalide, Déjà validé, Remboursé)" }
					]
				},
				{
					group: { en: "Attendance Management", fr: "Gestion des présences" },
					items: [
						{ en: "Real-time attendance tracking", fr: "Suivi des présences en temps réel" },
						{ en: "Attendee validation and check-in system", fr: "Système de validation et d'enregistrement des participants" },
						{ en: "Attendance reports and analytics", fr: "Rapports et analytique des présences" }
					]
				},
				{
					group: { en: "Enhanced Security", fr: "Sécurité renforcée" },
					items: [
						{ en: "Ticket validation security improvements", fr: "Améliorations de la sécurité de validation des billets" },
						{ en: "Event-specific access controls", fr: "Contrôles d'accès spécifiques par événement" },
						{ en: "Secure QR code generation", fr: "Génération sécurisée de QR codes" }
					]
				}
			],
			fixes: [
				{ en: "QR code scanning accuracy improvements", fr: "Améliorations de la précision du scan de QR code" },
				{ en: "Mobile interface optimization", fr: "Optimisation de l'interface mobile" },
				{ en: "Validation system performance enhancements", fr: "Améliorations des performances du système de validation" }
			]
		}
	},
	{
		version: "v1.2.0",
		month: { en: "January 2025", fr: "Janvier 2025" },
		title: { en: "Payment & Order Processing Enhancement", fr: "Amélioration des paiements et du traitement des commandes" },
		sections: {
			newFeatures: [
				{
					group: { en: "Advanced Payment Features", fr: "Fonctionnalités de paiement avancées" },
					items: [
						{ en: "Stripe Connect integration for organizer payouts", fr: "Intégration Stripe Connect pour les paiements aux organisateurs" },
						{ en: "Platform fee management and configuration", fr: "Gestion et configuration des frais de plateforme" },
						{ en: "Payment intent capture and manual processing", fr: "Capture d'intention de paiement et traitement manuel" },
						{ en: "Refund processing system", fr: "Système de traitement des remboursements" }
					]
				},
				{
					group: { en: "Order Management", fr: "Gestion des commandes" },
					items: [
						{ en: "Comprehensive order tracking and management", fr: "Suivi et gestion complets des commandes" },
						{ en: "Order status updates and notifications", fr: "Mises à jour et notifications des statuts de commande" },
						{ en: "Guest order creation for non-registered users", fr: "Création de commande pour invités (non inscrits)" },
						{ en: "Order email notifications", fr: "Notifications par e-mail des commandes" }
					]
				},
				{
					group: { en: "Ticket PDF Generation", fr: "Génération de PDF de billets" },
					items: [
						{ en: "Automated ticket PDF generation", fr: "Génération automatique de PDF de billets" },
						{ en: "QR code generation for ticket validation", fr: "Génération de QR codes pour la validation des billets" },
						{ en: "Email delivery of tickets to customers", fr: "Envoi des billets par e-mail aux clients" }
					]
				}
			],
			fixes: [
				{ en: "Payment processing reliability improvements", fr: "Amélioration de la fiabilité du traitement des paiements" },
				{ en: "Order email delivery optimization", fr: "Optimisation de l'envoi des e-mails de commande" },
				{ en: "PDF generation performance enhancements", fr: "Améliorations des performances de génération de PDF" }
			]
		}
	},
	{
		version: "v1.1.0",
		month: { en: "December 2024", fr: "Décembre 2024" },
		title: { en: "Enhanced Event Management", fr: "Gestion d’événements améliorée" },
		sections: {
			newFeatures: [
				{
					group: { en: "Advanced Event Settings", fr: "Paramètres avancés d'événement" },
					items: [
						{ en: "Event cover image upload and management", fr: "Téléversement et gestion de l'image de couverture" },
						{ en: "Event location and venue details", fr: "Lieu et détails du site de l'événement" },
						{ en: "Event date and time management with timezone support", fr: "Gestion de la date et de l'heure avec fuseaux horaires" },
						{ en: "Event description and additional details", fr: "Description de l'événement et détails supplémentaires" }
					]
				},
				{
					group: { en: "Table Management System", fr: "Système de gestion des tables" },
					items: [
						{ en: "Create and manage table reservations", fr: "Créer et gérer des réservations de tables" },
						{ en: "Table pricing and capacity management", fr: "Tarification et gestion de la capacité des tables" },
						{ en: "Table order tracking and validation", fr: "Suivi et validation des commandes de table" }
					]
				},
				{
					group: { en: "Basic Form Builder", fr: "Générateur de formulaires basique" },
					items: [
						{ en: "Custom event registration forms", fr: "Formulaires d'inscription personnalisés" },
						{ en: "Question creation and management", fr: "Création et gestion de questions" },
						{ en: "Form response collection", fr: "Collecte des réponses de formulaire" }
					]
				}
			],
			fixes: [
				{ en: "Improved event creation workflow", fr: "Amélioration du flux de création d'événements" },
				{ en: "Enhanced form validation", fr: "Validation des formulaires améliorée" },
				{ en: "Better error messaging for users", fr: "Meilleurs messages d'erreur pour les utilisateurs" }
			]
		}
	},
	{
		version: "v1.0.0",
		month: { en: "November 2024", fr: "Novembre 2024" },
		title: { en: "Foundation Release - Core Platform Launch", fr: "Version initiale - Lancement de la plateforme" },
		sections: {
			newFeatures: [
				{
					group: { en: "Event Management System", fr: "Système de gestion d'événements" },
					items: [
						{ en: "Create, edit, and manage events with comprehensive details", fr: "Créer, modifier et gérer des événements avec des détails complets" },
						{ en: "Event state management (Draft, Published, Cancelled, Deleted)", fr: "Gestion des états d'événement (Brouillon, Publié, Annulé, Supprimé)" },
						{ en: "Event duplication functionality for recurring events", fr: "Duplication d'événements pour les récurrences" },
						{ en: "Event metrics and analytics dashboard", fr: "Tableau de bord des mesures et analyses d'événements" }
					]
				},
				{
					group: { en: "Basic Ticketing System", fr: "Système de billetterie basique" },
					items: [
						{ en: "Create and manage ticket types with pricing", fr: "Créer et gérer des types de billets avec tarification" },
						{ en: "Ticket quantity management and availability tracking", fr: "Gestion des quantités de billets et suivi de la disponibilité" },
						{ en: "Basic ticket sales tracking", fr: "Suivi basique des ventes de billets" }
					]
				},
				{
					group: { en: "User Authentication & Profiles", fr: "Authentification et profils utilisateurs" },
					items: [
						{ en: "Organizer account creation and management", fr: "Création et gestion des comptes organisateurs" },
						{ en: "Profile customization with bio, website, and social links", fr: "Personnalisation du profil (bio, site web, liens sociaux)" },
						{ en: "Profile picture upload with S3 integration", fr: "Téléversement de photo de profil avec intégration S3" }
					]
				},
				{
					group: { en: "Payment Integration", fr: "Intégration des paiements" },
					items: [
						{ en: "Stripe payment processing integration", fr: "Intégration du traitement des paiements Stripe" },
						{ en: "Basic checkout flow for ticket purchases", fr: "Flux de paiement basique pour l'achat de billets" },
						{ en: "Order management and tracking", fr: "Gestion et suivi des commandes" }
					]
				}
			],
			fixes: [
				{ en: "Initial platform stability improvements", fr: "Améliorations initiales de la stabilité de la plateforme" },
				{ en: "Basic error handling implementation", fr: "Mise en œuvre basique de la gestion des erreurs" },
				{ en: "Database connection optimization", fr: "Optimisation de la connexion à la base de données" }
			]
		}
	},
	{
		version: "Technical Improvements",
		month: { en: "Across Releases", fr: "Toutes les versions" },
		title: { en: "Technical Improvements Throughout Releases", fr: "Améliorations techniques à travers les versions" },
		sections: {
			newFeatures: [
				{
					group: { en: "Infrastructure", fr: "Infrastructure" },
					items: [
						{ en: "Database Optimization: Continuous improvement of database queries and indexing", fr: "Optimisation de la base de données : amélioration continue des requêtes et de l'indexation" },
						{ en: "Caching System: Implementation of Redis-based caching for improved performance", fr: "Système de cache : mise en place d'un cache basé sur Redis pour de meilleures performances" },
						{ en: "CDN Integration: Static asset delivery optimization", fr: "Intégration CDN : optimisation de la livraison des ressources statiques" },
						{ en: "Monitoring: Comprehensive logging and error tracking system", fr: "Supervision : journalisation complète et système de suivi des erreurs" }
					]
				},
				{
					group: { en: "Security", fr: "Sécurité" },
					items: [
						{ en: "Authentication: Enhanced session management and security", fr: "Authentification : gestion des sessions et sécurité renforcées" },
						{ en: "Data Protection: Improved data encryption and privacy measures", fr: "Protection des données : chiffrement amélioré et mesures de confidentialité" },
						{ en: "API Security: Rate limiting and request validation", fr: "Sécurité API : limitation du débit et validation des requêtes" },
						{ en: "Audit Logging: Comprehensive activity tracking and monitoring", fr: "Journal d'audit : suivi et surveillance complets des activités" }
					]
				},
				{
					group: { en: "Performance", fr: "Performance" },
					items: [
						{ en: "Load Optimization: Improved handling of concurrent users and requests", fr: "Optimisation de charge : meilleure gestion des utilisateurs et requêtes simultanés" },
						{ en: "Memory Management: Optimized memory usage and garbage collection", fr: "Gestion de la mémoire : utilisation optimisée et collecte des déchets" },
						{ en: "Response Times: Reduced API response times across all endpoints", fr: "Temps de réponse : réduction des temps de réponse de l'API sur tous les endpoints" },
						{ en: "Scalability: Platform architecture improvements for better scalability", fr: "Scalabilité : améliorations de l'architecture pour une meilleure montée en charge" }
					]
				}
			],
			fixes: []
		}
	}
];


