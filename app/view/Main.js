Ext.define('MyApp.view.Main', {
    extend: 'Ext.Carousel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Toolbar',
        'MyApp.view.SettingsView',
        'MyApp.view.SlideMenuView'
    ],
    config: {
        direction: 'horizontal',

        items: [
            {
                xtype: 'titlebar',
                cls: 'title',
                docked: 'top',
                title: 'Do I need my Umbrella?',
                items:[
                    {
                        cls: 'back',
                        hidden: true,
                        ui: 'back',
                        action: 'back',
                        align: 'left',
                        text: 'back'
                    },
                    {
                        iconCls: 'settings',
                        action: 'settings',
                        ui: 'plain',
                        align: 'right'
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        iconCls: 'list',
                        align: 'right',
                        action: 'menu',
                        ui: 'plain',
                        handler: function(){
                            if(Ext.Viewport.getMenus().right.isHidden()){
                                Ext.Viewport.showMenu('right');
                            }
                            else
                            {
                                Ext.Viewport.hideMenu('right');
                            }
                        }
                    }
                ]
            },
            {
                itemId: 'mainview',
                cls: 'textview'
            },
            {
                xtype: 'settingsview'
            },
            {
                xtype: 'slidemenuview'
            },
            {
                xtype: 'toolbar',
                cls: 'footer',
                ui: 'light',
                docked: 'bottom',
                html: '<span>Powered by Sencha Touch</span>'
            },
        ]
    },

    initialize: function(){
        Ext.Viewport.setMenu(this.createMenu(),{
            side: 'right',
            reveal: true
        });
    },

    //function goes here
    createMenu: function(){
        var menu = Ext.create('Ext.Menu', {
            width: 250,
            scrollable: 'vertical',
            items: [
                {
                    xtype: 'button',
                    text: 'Option 1',
                },
                {
                    xtype: 'button',
                    text: 'Option 2',
                }
            ]
        });

        return menu;
    }
});
