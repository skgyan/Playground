const config = {
    languages: [],
    set language(lang) {
        return this.languages.push(lang);
    },
    get language() {
        return this.languages;
    }
}

config.language = 'JS'; // language method is defiend with set hence can be used as a property
config.language = 'TS';
config['language'] = 'Go';
console.log(config.language);