( function(winkstart, amplify, $) {

    winkstart.config =  {
        /* Was winkstart.debug */
        debug: false,

        /* web server used by the cdr module to show the link to the logs */
        logs_web_server_url: 'http://cdrs.2600hz.com/',

        /* Customized name displayed in the application (login page, resource module..) */
        company_name: '2600hz',

        base_urls: {
            'u.2600hz.com': {
                /* If this was set to true, Winkstart would look for u_2600hz_com.png in config/images/logos */
                custom_logo: false
            },
            'apps.2600hz.com': {
                custom_logo: false
            }
        },

        /* Was winkstart.realm_suffix */
        realm_suffix: {
            login: '.sip.2600hz.com',
            register: '.trial.2600hz.com'
        },

        /* What applications is available for a user that just registered */
        register_apps: {
            cluster: {
               label: 'Cluster Manager',
               icon: 'cluster_manager',
               api_url: 'http://apps.2600hz.com:8000/v1'
            },
            voip: {
                label: 'Trial PBX',
                icon: 'phone',
                api_url: 'http://apps001-demo-ord.2600hz.com:8000/v1'
            }
        },

        /* Custom links */
        nav: {
            help: 'http://www.2600hz.org/support.html'
            /* logout: ''*/
        }
    };

    winkstart.apps = {
        'auth' : {
            //api_url: 'http://apps.2600hz.com:8000/v1',
            api_url: 'http://192.168.1.42:8000/v1',
            /* These are some settings that are set automatically. You are free to override them here.
            account_id: null,
            auth_token: null,
            user_id: null,
            realm: null
            */
        },
        'myaccount': {}
    };

    winkstart.available_apps = {
        'voip': {
            'name': 'VoIP Services'
        },
        'cluster': {
            'name': 'Cluster Manager'
        },
        'connect': {
            'name': 'Trunkstore'
        },
        'userportal': {
            'name': 'User Portal'
        },
        'accounts': {
            'name': 'Accounts Manager'
        }
    };

    amplify.cache = false;

    winkstart.config.available_app = {
        'voip': {
            id: 'voip',
            name: 'VoIP Sevices',
            url: '',
            icon: 'PBXservices.png',
            desc: 'Manage vmbox, callflows ...'
        },

        'cluster': {
            id: 'cluster',
            name: 'Cluster Manager',
            url: '',
            icon: 'ClusterManager.png',
            desc: 'Manage Servers and Infrastructure'
        },
        
        'trunkstore': {
            id: 'trunkstore',
            name: 'TrunkStore',
            url: '',
            icon: 'Monitoring.png',
            desc: 'Some desc'
        },
        
        'userportal': {
            id: 'userportal',
            name: 'Userportal',
            url: '',
            icon: 'UserPortal.png',
            desc: 'Some desc'
        },
        
        'accounts': {
            id: 'accounts',
            name: 'Accounts',
            url: '',
            icon: 'TrunkStore.png',
            desc: 'Some desc'
        }
    };

    winkstart.flags = {
        advancedView: false  
    };

})(window.winkstart = window.winkstart || {}, window.amplify = window.amplify || {}, jQuery);
