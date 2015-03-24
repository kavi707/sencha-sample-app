Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView: 'main',
            settingsView: 'settingsview',
            menuView: 'slidemenuview',

            btnSettings: 'main button[action=settings]',
            btnMenu:'main button[action=menu]',
            btnRefresh: 'settingsview button[action=refresh]',
            btnMenuView: 'settingsview button[action=menuview]',
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
            'btnMenu':{
                tap: 'onBtnMenuTap'
            },
            btnMenuView: {
                tap: 'onMenuViewBtnTap'
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

    onBtnMenuTap: function() {
        console.log('On menu button clicked');
    },

    onMenuViewBtnTap : function () {
        console.log('On Menu View button clicked');
        this.getMainView().setActiveItem(2);
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
        this.getMainView().setActiveItem(1);
    },

    onBackBtnTap: function() {
        console.log("Back btn clicked");
        this.getMainView().setActiveItem(0);
    },

    onCarouselChange: function(carousel, newVal, oldVal) {
        console.log("View changed");
        console.log(newVal.getItemId());
        if (newVal.getItemId() == "mainview") {
            this.getBtnBack().hide();
            this.getBtnMenu().hide();
            this.getBtnSettings().show();

            Ext.ComponentQuery.query('titlebar')[0].setTitle('Do I need my Umbrella?');
        }  else if (newVal.getItemId() == "ext-settingsview-1") {
            this.getBtnBack().show();
            this.getBtnSettings().hide();
            this.getBtnMenu().hide();

            Ext.ComponentQuery.query('titlebar')[0].setTitle('Settings');
        } else {
            this.getBtnBack().show();
            this.getBtnMenu().show();
            this.getBtnSettings().hide();

            Ext.ComponentQuery.query('titlebar')[0].setTitle('Menu');
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log("Test app running");
        this.getMainView().setActiveItem(0);
    }
});
