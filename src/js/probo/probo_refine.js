(function(ProboJs) {ProboJs.input.refine = {
    '1':{
        caption:'検索カテゴリによる絞り込み'
        ,refines:[
            {name: 'news',  label: 'ニュース', value:'_TEXT/EQ/1/news'}
           ,{name: 'sustainability',     label: 'サステナビリティ', value:'_TEXT/EQ/1/sustainability'}
           ,{name: 'ir',  label: 'IR情報', value:'_TEXT/EQ/1/ir'}
           ,{name: 'recruit',  label: '採用情報', value:'_TEXT/EQ/1/recruit'}
        ]
    },
    '2':{
        caption:'ファイルタイプによる絞り込み'
        ,refines:[
            {name: 'html', label: 'HTML',     value:'_TEXT/EQ/3/html'}
           ,{name: 'pdf' , label: 'PDF',      value:'_TEXT/EQ/3/pdf'}
        ]
    }
};})(ProboJs);
