/**
 * Created by kavi707 on 3/21/15.
 */
Ext.define('MyApp.store.Settings', {
    extend: 'Ext.data.Store',
    requires: ['MyApp.model.Setting'],
    config: {
        model: 'MyApp.model.Setting',
        autoLoad: true,
        storeId: 'Settings'
    }
});