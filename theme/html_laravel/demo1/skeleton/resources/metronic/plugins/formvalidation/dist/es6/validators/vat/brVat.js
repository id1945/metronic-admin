export default function t(t){if(t===""){return{meta:{},valid:true}}const e=t.replace(/[^\d]+/g,"");if(e===""||e.length!==14){return{meta:{},valid:false}}if(e==="00000000000000"||e==="11111111111111"||e==="22222222222222"||e==="33333333333333"||e==="44444444444444"||e==="55555555555555"||e==="66666666666666"||e==="77777777777777"||e==="88888888888888"||e==="99999999999999"){return{meta:{},valid:false}}let r=e.length-2;let a=e.substring(0,r);const l=e.substring(r);let n=0;let i=r-7;let s;for(s=r;s>=1;s--){n+=parseInt(a.charAt(r-s),10)*i--;if(i<2){i=9}}let f=n%11<2?0:11-n%11;if(f!==parseInt(l.charAt(0),10)){return{meta:{},valid:false}}r=r+1;a=e.substring(0,r);n=0;i=r-7;for(s=r;s>=1;s--){n+=parseInt(a.charAt(r-s),10)*i--;if(i<2){i=9}}f=n%11<2?0:11-n%11;return{meta:{},valid:f===parseInt(l.charAt(1),10)}}