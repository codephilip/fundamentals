class ConfigurationManager {
    constructor() {
        if (!ConfigurationManager.instance) {
            this.config = this.loadConfiguration();
            ConfigurationManager.instance = this;
        }
        return ConfigurationManager.instance;
    }

    loadConfiguration() {
        // Load configuration data from a file, environment variables, or remote service
        // For example, it could be reading from a JSON file or an environment variable
        return {
            databaseUrl: process.env.DATABASE_URL,
            apiKey: process.env.API_KEY,
            // ... other configurations
        };
    }

    get(key) {
        return this.config[key];
    }

    // Method to refresh configuration data
    refresh() {
        this.config = this.loadConfiguration();
    }

    // ... other utility methods as needed
}

const instance = new ConfigurationManager();
Object.freeze(instance);

module.exports = instance;

