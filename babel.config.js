const  presets=[ [
"@babel/preset-env",
{
	"useBuiltIns": "entry"
}
]
];

const plugins = ['@babel/plugin-transform-runtime',["component",
{
	"libraryName": "mint-ui",
	"style": true
}
]];


module.exports={presets,plugins}



