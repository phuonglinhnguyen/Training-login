{
 "name": "DA_6", (*)
  "cron_trigger": "0/10 * * * * ?", (*)
  "active": true, 
  "project_id": "5c80e18f743a8b0020b0b6f1", 
  "version": "5",
  "filter": {
    "collector": { (radio button ) neu khong chon thi luu theo default
      "doc_status": "final",
      "batch_status": "",
      "doc_set_status": ""
    },
    "transform": {
      "pattern": "" (string co dang jsonpath expression)
    }
  },
 "rules": { 
    "common": + [ (<key>: <func, string>) mac dinh la [] 
      {
        "convertNumber": "function(input){return input? input.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',') : '';}"
      },
      {
        "XX": "12345"
      }
    ],
    "content": { + (bat buoc phai nhap mot phan tu: <key>: {
        "dataKey": <string>,
        "default": <function(input, parent, params), string>,
         "value": <function(input, parent, params)>
    })
      "H4": {
        "dataKey": "p3",
        "default": "p3",
         "value": ""
      },
      "H0": {
        "dataKey": "h0",
        "default": "function(input, parent, params){if(params.document_link.link_type === 'sftp') {let result = lookup_doc_set(params['_id']); return result.doc_set_name;}else if(params.document_link.link_type === 'imap') {return params.document_link.mail.subject;} else {return '';} }",
        "value": ""
      },
      "H3": {
        "dataKey": "doctype",
        "default": "function(input, parent, params){ if(input === 'Rechnung') {return 'R';} else if(input === 'Gutschrift') {return 'G';} else if(input === 'Mahnung') {return 'M';} else {return 'S';} }",
        "value": ""
      },
      "H9": {
        "dataKey": "debitor_nr",
        "default": "999",
        "value": ""
      },
      "H15": {
        "dataKey": "auftragsbestell_nr",
        "value": "function(input, parent, params){ return input || 2222222222;}"
      },
      "H10": {
        "dataKey": "betriebsstellen_bst",
        "value": "function(input, parent, params){ return input || 7777;}"
      },
      "H11": {
        "dataKey": "abteilung_abt",
        "default": ""
      },
      "H12": {
        "dataKey": "rechnung_nr",
        "default": "0"
      },
      "H13": {
        "dataKey": "rechnungsdatum",
        "value": "function(input, parent, params){ return input? input.slice(0,2) + '.' + input.slice(2,4) + '.' + input.slice(4) : '';}"
      },
      "H14": {
        "dataKey": "h14",
        "default": "function(input, parent, params){ return params.document_link.last_modified || params.document_link.create_time;}"
      },
      "H66": {
        "dataKey": "vertrags_nr_fm",
        "default": ""
      },
      "H24": {
        "dataKey": "lieferschein_nr",
        "value": "function(input, parent, params){return !input && parent && parent['abteilung_abt'] < 700? 2222222222: ''; }"
      },
      "H33": {
        "dataKey": "lieferanten_nr_bbn",
        "default": ""
      },
      "H35": {
        "dataKey": "land",
        "default": ""
      },
      "H37": {
        "dataKey": "lieferanten_name",
        "default": ""
      },
      "H38": {
        "dataKey": "netto",
        "value": "function(input, parent, params){return params.convertNumber(input);}"
      },
      "H51": {
        "dataKey": "steuerstatz",
        "value": "function(input, parent, params){return params.convertNumber(input);}"
      },
      "H52": {
        "dataKey": "steuerbetrag",
        "value": "function(input, parent, params){return params.convertNumber(input);}"
      },
      "H53": {
        "dataKey": "brutto",
        "value": "function(input, parent, params){return params.convertNumber(input);}"
      },
      "H54": {
        "dataKey": "wahrung",
        "default": ""
      },
      "H56": {
        "dataKey": "h56",
        "default": "function(input, parent, params){ return params['H0']; }"
      },
      "H58": {
        "dataKey": "wahrung",
        "value": "function(input, parent, params){ if(parent && parent['betriebsstellen_bst'] === '6666' || params['H66']) {return 6666666666;} else if(!input){ if(parent && parent['abteilung_abt']){ return '';} else { return 7777777777; } return input; }}"
      },
      "H64": {
        "dataKey": "sachkonto_kto",
        "default": ""
      },
      "H67": {
        "dataKey": "innenauftrag_ia",
        "default": ""
      },
      "H63": {
        "dataKey": "h63",
        "default": "function(input, parent, params){ if(parent['debitor_nr'] === 054 && !parent['abteilung_abt'] && parent['kostenstelle_kst']){ return 'KRE';} else if (parent['abteilung_abt'] && !parent['kostenstelle_kst']){ return 'WRE';} else {return 'KRE';}; }"
      },
      "dok_dat_feld": {
        "dataKey": "dok_dat_feld",
        "default": "function(input, parent, params){ if(['Rechnung','Gutschrift'].indexOf(parent['rechnungtype']) != -1){ return '';} else if (parent['rechnungtype'] === 'Mahnung'){ return 'Mahnstufe';} else {return '1';}; }"
      }
    }
  },
  "dictionary": [*
    {
      "fieldKey": "lookup_doc_set",
      "database_type": "MongoDB", selelct box: MongoDb, PostgresSQL
      "host": "sit-mgdb.digi-texx.vn",
      "port": "27017",
      "username": "",
      "password": "",
      "database_name": "phoenix",
      "schema_name": "5c80e18f743a8b0020b0b6f1_doc_set",
      "query": {
        "_id": null <key>: null
      }
    }
  ]
}