Ext.define('MyApp.view.SettingsView', {
    extend: 'Ext.form.Panel',
    xtype: 'settingsview',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Toggle',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.Button'
    ],
    
    config: {
        items:[{
            xtype: 'fieldset',
            title: 'SettingsView',
            instructions: 'In case you do not want the app to detect your location you can enter the city and country.',
            items: [
                {
                    name: 'geo',
                    xtype: 'togglefield',
                    label: 'Auto detect?',
                    labelWidth:'55%',
                    value:'1'
                },
                {
                    name: 'units',
                    xtype: 'selectfield',
                    label: 'Units',
                    options:[
                        {text: 'Fahrenheit', value: 'f'},
                        {text: 'Celsius', value:'c'}
                    ],
                    disabled: true
                },
                {
                    name: 'city',
                    xtype: 'textfield',
                    label: 'City',
                    disabled: true
                },
                {
                    name: 'country',
                    xtype: 'textfield',
                    label: 'Country',
                    disabled: true
                },
                {
                    xtype: 'button',
                    text: 'Refresh',
                    action:'refresh',
                    margin:'10 5',
                    ui: 'confirm'
                },
                {
                    xtype: 'button',
                    text: 'Menu',
                    action:'menuview',
                    margin:'10 5',
                    ui: 'confirm'
                }
            ]
        }]
    }
});