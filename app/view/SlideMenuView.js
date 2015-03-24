/**
 * Created by kwijewardana on 3/24/15.
 */
Ext.define('MyApp.view.SlideMenuView', {
    extend: 'Ext.Container',
    xtype: 'slidemenuview',

    requires:[
        'Ext.Menu'
    ],

    config: {
        layout: {
            type: 'card'
        },
        items: [

        ]
    }
});