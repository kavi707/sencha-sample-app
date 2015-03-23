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

    onSettingsBtnTap: function() {
        console.log("Settings btn clicked");
        this.getMainView().setActiveItem(0);
    },

    onBackBtnTap: function() {
        console.log("Back btn clicked");
        this.getMainView().setActiveItem(1);
    },

    onCarouselChange: function(carousel, newVal, oldVal) {
        console.log("View changed");
        if (newVal.getItemId() == "mainview") {
            this.getBtnBack().hide();
            this.getBtnSettings().show();

            Ext.ComponentQuery.query('titlebar')[0].setTitle('Do I need my Umbrella?');
        } else {
            this.getBtnBack().show();
            this.getBtnSettings().hide();

            Ext.ComponentQuery.query('titlebar')[0].setTitle('Settings');
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log("Test app running");
        this.getMainView().setActiveItem(1);
    }
});
