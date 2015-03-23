Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView: 'main',
            settingsView: 'settingsview',

            btnSettings: 'main button[action=settings]',
            btnRefresh: 'settingsview button[action=refresh]',
            btnBack: 'main button[action=back]',

            toggleGeo: 'settingsview togglefield',
            fieldCity: 'settingsview textfield[name=city]',
            fieldCountry: 'settingsview textfield[name=country]',
            fieldUnits: 'settingsview selectfield'
        },
        control: {
            'btnRefresh': {
                tap: 'onRefresh'
            },
            'btnSettings': {
                tap: 'onSettingsBtnTap'
            },
            'btnBack': {
                tap: 'onBackBtnTap'
            },
            'toggleGeo': {
                change: 'onToggle'
            },
            'mainView': {
                activeitemchange: 'onCarouselChange'
            }
        },
        stores:'MyApp.store.Settings'
    },

    onRefresh: function() {
        console.log('On refresh button clicked');
    },

    onToggle: function(togglefield) {
        console.log("On toggle");

        if (togglefield.getValue() === 0) {
            this.getFieldCity().enable();
            this.getFieldCountry().enable();
            this.getFieldUnits().enable();
        } else {
            this.getFieldCity().disable();
            this.getFieldUnits().disable();
            this.getFieldCountry().disable();
            this.getFieldCity().reset();
            this.getFieldCountry().reset();
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log("Test app running");
    }
});
