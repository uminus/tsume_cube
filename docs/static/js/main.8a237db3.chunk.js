(this.webpackJsonptsume_cube_react=this.webpackJsonptsume_cube_react||[]).push([[0],{27:function(t,e,i){"use strict";var r=function(){var t=2;function e(){this.move=[],this.moveSol=[],this.nodeUD=[],this.valid1=0,this.allowShorter=!1,this.cc=new M,this.urfCubieCube=[],this.urfCoordCube=[],this.phase1Cubie=[],this.preMoveCubes=[],this.preMoves=[],this.preMoveLen=0,this.maxPreMoves=0,this.isRec=!1;for(var t=0;t<21;t++)this.nodeUD[t]=new R,this.phase1Cubie[t]=new M;for(t=0;t<6;t++)this.urfCubieCube[t]=new M,this.urfCoordCube[t]=new R;for(t=0;t<20;t++)this.preMoveCubes[t+1]=new M}for(var i=2768,r=495,n=140,s=[],o=[1],a=["U ","U2","U'","R ","R2","R'","F ","F2","F'","D ","D2","D'","L ","L2","L'","B ","B2","B'"],c=[0,1,2,4,7,9,10,11,13,16,3,5,6,8,12,14,15,17],h=[],l=[],u=[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],[6,7,8,0,1,2,3,4,5,15,16,17,9,10,11,12,13,14],[3,4,5,6,7,8,0,1,2,12,13,14,15,16,17,9,10,11],[2,1,0,5,4,3,8,7,6,11,10,9,14,13,12,17,16,15],[8,7,6,2,1,0,5,4,3,17,16,15,11,10,9,14,13,12],[5,4,3,8,7,6,2,1,0,14,13,12,17,16,15,11,10,9]],f=0;f<18;f++)h[c[f]]=f;for(f=0;f<10;f++){var p=~~(c[f]/3);l[f]=0;for(var v=0;v<10;v++){var j=~~(c[v]/3);l[f]|=(p==j||p%3==j%3&&p>=j?1:0)<<v}}l[10]=0;for(f=0;f<13;f++){s[f]=[],o[f+1]=o[f]*(f+1),s[f][0]=s[f][f]=1;for(v=1;v<13;v++)s[f][v]=v<=f?s[f-1][v-1]+s[f-1][v]:0}function d(t,e,i){return i?e<<1|1&t:e|248&t}function b(t,e){return e?t>>1:7&t}function m(t,e,i){t[e>>3]^=i<<(e<<2)}function x(t,e){return t[e>>3]>>(e<<2)&15}function g(t,e,i){return Math.min(t,e[i>>3]>>(i<<2)&15)}function y(t){return 0!=(t-286331153&~t&2290649224)}function C(t){return t^14540032>>((15&t)<<1)&3}function O(t,e,i){var r=$[t];return i&&(r=C(r)),65520&r|T[15&r][e]}function M(){this.ca=[0,1,2,3,4,5,6,7],this.ea=[0,2,4,6,8,10,12,14,16,18,20,22]}function S(t,e,i,r){i--;for(var n=1985229328,s=0;s<i;++s){var a=o[i-s],c=~~(e/a);e%=a,c<<=2,t[s]=d(t[s],n>>c&15,r);var h=(1<<c)-1;n=(n&h)+(n>>4&~h)}t[i]=d(t[i],15&n,r)}function w(t,e,i){for(var r=0,n=1985229328,s=0;s<e-1;++s){var o=b(t[s],i)<<2;r=(e-s)*r+(n>>o&15),n-=286331152<<o}return r}function k(t,e,i,r){t[i-1]=d(t[i-1],0,r);for(var n=i-2;n>=0;--n){t[n]=d(t[n],e%(i-n),r),e=~~(e/(i-n));for(var s=n+1;s<i;++s)b(t[s],r)>=b(t[n],r)&&(t[s]=d(t[s],b(t[s],r)+1,r))}}function D(t,e,i){for(var r=0,n=0;n<e;++n){r*=e-n;for(var s=n+1;s<e;++s)b(t[s],i)<b(t[n],i)&&++r}return r}function E(t,e,i){for(var r=0,n=4,o=t.length-1;o>=0;o--){(12&b(t[o],i))==e&&(r+=s[o][n--])}return r}function P(t,e,i,r){for(var n=t.length-1,o=4,a=n,c=n;c>=0;c--)e>=s[c][o]?(e-=s[c][o--],t[c]=d(t[c],o|i,r)):((12&a)==i&&(a-=4),t[c]=d(t[c],a--,r))}function F(t,e){for(var i=0,r=e-2;r>=0;r--)i^=t%(e-r),t=~~(t/(e-r));return 1&i}M.EdgeMult=function(t,e,i){for(var r=0;r<12;r++)i.ea[r]=t.ea[e.ea[r]>>1]^1&e.ea[r]},M.CornMult=function(t,e,i){for(var r=0;r<8;r++){var n=((t.ca[7&e.ca[r]]>>3)+(e.ca[r]>>3))%3;i.ca[r]=7&t.ca[7&e.ca[r]]|n<<3}},M.CornMultFull=function(t,e,i){for(var r=0;r<8;r++){var n=t.ca[7&e.ca[r]]>>3,s=e.ca[r]>>3,o=n+(n<3?s:6-s);o=o%3+(n<3==s<3?0:3),i.ca[r]=7&t.ca[7&e.ca[r]]|o<<3}},M.CornConjugate=function(t,e,i){for(var r=B[I[0][e]],n=B[e],s=0;s<8;s++){var o=r.ca[7&t.ca[7&n.ca[s]]]>>3,a=t.ca[7&n.ca[s]]>>3,c=o<3?a:(3-a)%3;i.ca[s]=7&r.ca[7&t.ca[7&n.ca[s]]]|c<<3}},M.EdgeConjugate=function(t,e,i){for(var r=B[I[0][e]],n=B[e],s=0;s<12;s++)i.ea[s]=r.ea[t.ea[n.ea[s]>>1]>>1]^1&t.ea[n.ea[s]>>1]^1&n.ea[s]},M.prototype.init=function(t,e){return this.ca=t.slice(),this.ea=e.slice(),this},M.prototype.initCoord=function(t,e,i,r){return S(this.ca,t,8,!1),this.setTwist(e),k(this.ea,i,12,!0),this.setFlip(r),this},M.prototype.isEqual=function(t){for(var e=0;e<8;e++)if(this.ca[e]!=t.ca[e])return!1;for(e=0;e<12;e++)if(this.ea[e]!=t.ea[e])return!1;return!0},M.prototype.setFlip=function(t){for(var e,i=0,r=10;r>=0;r--,t>>=1)i^=e=1&t,this.ea[r]=254&this.ea[r]|e;this.ea[11]=254&this.ea[11]|i},M.prototype.getFlip=function(){for(var t=0,e=0;e<11;e++)t=t<<1|1&this.ea[e];return t},M.prototype.getFlipSym=function(){return q[this.getFlip()]},M.prototype.setTwist=function(t){for(var e,i=15,r=6;r>=0;r--,t=~~(t/3))i-=e=t%3,this.ca[r]=7&this.ca[r]|e<<3;this.ca[7]=7&this.ca[7]|i%3<<3},M.prototype.getTwist=function(){for(var t=0,e=0;e<7;e++)t+=(t<<1)+(this.ca[e]>>3);return t},M.prototype.getTwistSym=function(){return G[this.getTwist()]},M.prototype.setCPerm=function(t){S(this.ca,t,8,!1)},M.prototype.getCPerm=function(){return w(this.ca,8,!1)},M.prototype.getCPermSym=function(){return C(K[w(this.ca,8,!1)])},M.prototype.setEPerm=function(t){S(this.ea,t,8,!0)},M.prototype.getEPerm=function(){return w(this.ea,8,!0)},M.prototype.getEPermSym=function(){return K[w(this.ea,8,!0)]},M.prototype.getUDSlice=function(){return 494-E(this.ea,8,!0)},M.prototype.setUDSlice=function(t){P(this.ea,494-t,8,!0)},M.prototype.getMPerm=function(){return D(this.ea,12,!0)%24},M.prototype.setMPerm=function(t){k(this.ea,t,12,!0)},M.prototype.getCComb=function(){return E(this.ca,0,!1)},M.prototype.setCComb=function(t){P(this.ca,t,0,!1)},M.prototype.URFConjugate=function(){var t=new M;M.CornMult(M.urf2,this,t),M.CornMult(t,M.urf1,this),M.EdgeMult(M.urf2,this,t),M.EdgeMult(t,M.urf1,this)};var L=[[8,9,20],[6,18,38],[0,36,47],[2,45,11],[29,26,15],[27,44,24],[33,53,42],[35,17,51]],U=[[5,10],[7,19],[3,37],[1,46],[32,16],[28,25],[30,43],[34,52],[23,12],[21,41],[50,39],[48,14]];function R(){this.twist=0,this.tsym=0,this.flip=0,this.fsym=0,this.slice=0,this.prun=0,this.twistc=0,this.flipc=0}M.prototype.toFaceCube=function(t,e){t=t||L,e=e||U;for(var i="URFDLB",r=[],n=0;n<54;n++)r[n]=i[~~(n/9)];for(var s=0;s<8;s++)for(var o=7&this.ca[s],a=this.ca[s]>>3,c=0;c<3;c++)r[t[s][(c+a)%3]]=i[~~(t[o][c]/9)];for(var h=0;h<12;h++)for(o=this.ea[h]>>1,a=1&this.ea[h],c=0;c<2;c++)r[e[h][(c+a)%2]]=i[~~(e[o][c]/9)];return r.join("")},M.prototype.invFrom=function(t){for(var e=0;e<12;e++)this.ea[t.ea[e]>>1]=e<<1|1&t.ea[e];for(var i=0;i<8;i++)this.ca[7&t.ca[i]]=i|32>>(t.ca[i]>>3)&24;return this},M.prototype.fromFacelet=function(t,e,i){e=e||L,i=i||U;for(var r,n,s,o,a=0,c=[],h=t[4]+t[13]+t[22]+t[31]+t[40]+t[49],l=0;l<54;++l){if(c[l]=h.indexOf(t[l]),-1==c[l])return-1;a+=1<<(c[l]<<2)}if(10066329!=a)return-1;for(l=0;l<8;++l){for(o=0;o<3&&(0!=c[e[l][o]]&&3!=c[e[l][o]]);++o);for(r=c[e[l][(o+1)%3]],n=c[e[l][(o+2)%3]],s=0;s<8;++s)if(r==~~(e[s][1]/9)&&n==~~(e[s][2]/9)){this.ca[l]=s|o%3<<3;break}}for(l=0;l<12;++l)for(s=0;s<12;++s){if(c[i[l][0]]==~~(i[s][0]/9)&&c[i[l][1]]==~~(i[s][1]/9)){this.ea[l]=s<<1;break}if(c[i[l][0]]==~~(i[s][1]/9)&&c[i[l][1]]==~~(i[s][0]/9)){this.ea[l]=s<<1|1;break}}},R.prototype.set=function(t){this.twist=t.twist,this.tsym=t.tsym,this.flip=t.flip,this.fsym=t.fsym,this.slice=t.slice,this.prun=t.prun,this.twistc=t.twistc,this.flipc=t.flipc},R.prototype.calcPruning=function(t){this.prun=Math.max(Math.max(g(dt,nt,this.twist*r+rt[this.slice][this.tsym]),g(bt,st,this.flip*r+rt[this.slice][this.fsym])),Math.max(g(jt,ot,this.twistc>>3<<11|Y[this.flipc^7&this.twistc]),g(jt,ot,this.twist<<11|Y[this.flip<<3|this.fsym^this.tsym])))},R.prototype.setWithPrun=function(t,e){if(this.twist=t.getTwistSym(),this.flip=t.getFlipSym(),this.tsym=7&this.twist,this.twist=this.twist>>3,this.prun=g(jt,ot,this.twist<<11|Y[this.flip^this.tsym]),this.prun>e)return!1;if(this.fsym=7&this.flip,this.flip=this.flip>>3,this.slice=t.getUDSlice(),this.prun=Math.max(this.prun,Math.max(g(dt,nt,this.twist*r+rt[this.slice][this.tsym]),g(bt,st,this.flip*r+rt[this.slice][this.fsym]))),this.prun>e)return!1;var i=new M;return M.CornConjugate(t,1,i),M.EdgeConjugate(t,1,i),this.twistc=i.getTwistSym(),this.flipc=i.getFlipSym(),this.prun=Math.max(this.prun,g(jt,ot,this.twistc>>3<<11|Y[this.flipc^7&this.twistc])),this.prun<=e},R.prototype.doMovePrun=function(t,e,i){return this.slice=tt[t.slice][e],this.flip=it[t.flip][J[e<<3|t.fsym]],this.fsym=7&this.flip^t.fsym,this.flip>>=3,this.twist=et[t.twist][J[e<<3|t.tsym]],this.tsym=7&this.twist^t.tsym,this.twist>>=3,this.prun=Math.max(Math.max(g(dt,nt,this.twist*r+rt[this.slice][this.tsym]),g(bt,st,this.flip*r+rt[this.slice][this.fsym])),g(jt,ot,this.twist<<11|Y[this.flip<<3|this.fsym^this.tsym])),this.prun},R.prototype.doMovePrunConj=function(t,e){return e=W[3][e],this.flipc=it[t.flipc>>3][J[e<<3|7&t.flipc]]^7&t.flipc,this.twistc=et[t.twistc>>3][J[e<<3|7&t.twistc]]^7&t.twistc,g(jt,ot,this.twistc>>3<<11|Y[this.flipc^7&this.twistc])},e.prototype.solution=function(t,e,i,r,n){St();var s=this.verify(t);return 0!=s?"Error "+Math.abs(s):(void 0===e&&(e=21),void 0===i&&(i=1e9),void 0===r&&(r=0),void 0===n&&(n=0),this.sol=e+1,this.probe=0,this.probeMax=i,this.probeMin=Math.min(r,i),this.verbose=n,this.moveSol=null,this.isRec=!1,this.initSearch(),this.search())},e.prototype.initSearch=function(){this.conjMask=0,this.maxPreMoves=this.conjMask>7?0:20;for(var t=0;t<6;t++)if(this.urfCubieCube[t].init(this.cc.ca,this.cc.ea),this.urfCoordCube[t].setWithPrun(this.urfCubieCube[t],20),this.cc.URFConjugate(),t%3==2){var e=(new M).invFrom(this.cc);this.cc.init(e.ca,e.ea)}},e.prototype.next=function(t,e,i){return void 0===t&&(t=1e9),void 0===e&&(e=0),void 0===i&&(i=0),this.probe=0,this.probeMax=t,this.probeMin=Math.min(e,t),this.moveSol=null,this.isRec=!0,this.verbose=i,this.search()},e.prototype.verify=function(t){if(-1==this.cc.fromFacelet(t))return-1;for(var e=0,i=0,r=0;r<12;r++)i|=1<<(this.cc.ea[r]>>1),e^=1&this.cc.ea[r];if(4095!=i)return-2;if(0!=e)return-3;var n=0;e=0;for(var s=0;s<8;s++)n|=1<<(7&this.cc.ca[s]),e+=this.cc.ca[s]>>3;return 255!=n?-4:e%3!=0?-5:0!=(F(D(this.cc.ea,12,!0),12)^F(this.cc.getCPerm(),8))?-6:0},e.prototype.phase1PreMoves=function(t,e,i){if(this.preMoveLen=this.maxPreMoves-t,(this.isRec?this.depth1==this.length1-this.preMoveLen:0==this.preMoveLen||0==(225207>>e&1))&&(this.depth1=this.length1-this.preMoveLen,this.phase1Cubie[0].init(i.ca,i.ea),this.allowShorter=7==this.depth1&&0!=this.preMoveLen,this.nodeUD[this.depth1+1].setWithPrun(i,this.depth1)&&0==this.phase1(this.nodeUD[this.depth1+1],this.depth1,-1)))return 0;if(0==t||this.preMoveLen+7>=this.length1)return 1;var r=0;(1==t||this.preMoveLen+1+7>=this.length1)&&(r|=225207),e=3*~~(e/3);for(var n=0;n<18;n++){if(n!=e&&n!=e-9&&n!=e+9){if(!(this.isRec&&n!=this.preMoves[this.maxPreMoves-t]||0!=(r&1<<n)))if(M.CornMult(N[n],i,this.preMoveCubes[t]),M.EdgeMult(N[n],i,this.preMoveCubes[t]),this.preMoves[this.maxPreMoves-t]=n,0==this.phase1PreMoves(t-1,n,this.preMoveCubes[t]))return 0}else n+=2}return 1},e.prototype.search=function(){for(this.length1=this.isRec?this.length1:0;this.length1<this.sol;this.length1++)for(this.urfIdx=this.isRec?this.urfIdx:0;this.urfIdx<6;this.urfIdx++)if(0==(this.conjMask&1<<this.urfIdx)&&0==this.phase1PreMoves(this.maxPreMoves,-30,this.urfCubieCube[this.urfIdx],0))return null==this.moveSol?"Error 8":this.moveSol;return null==this.moveSol?"Error 7":this.moveSol},e.prototype.initPhase2Pre=function(){if(this.isRec=!1,this.probe>=(null==this.moveSol?this.probeMax:this.probeMin))return 0;++this.probe;for(var t=this.valid1;t<this.depth1;t++)M.CornMult(this.phase1Cubie[t],N[this.move[t]],this.phase1Cubie[t+1]),M.EdgeMult(this.phase1Cubie[t],N[this.move[t]],this.phase1Cubie[t+1]);this.valid1=this.depth1;var e=this.initPhase2(this.phase1Cubie[this.depth1]);if(0==e||0==this.preMoveLen||2==e)return e;var i=3*~~(this.preMoves[this.preMoveLen-1]/3)+1;return M.CornMult(N[i],this.phase1Cubie[this.depth1],this.phase1Cubie[this.depth1+1]),M.EdgeMult(N[i],this.phase1Cubie[this.depth1],this.phase1Cubie[this.depth1+1]),this.preMoves[this.preMoveLen-1]+=2-this.preMoves[this.preMoveLen-1]%3*2,e=this.initPhase2(this.phase1Cubie[this.depth1+1]),this.preMoves[this.preMoveLen-1]+=2-this.preMoves[this.preMoveLen-1]%3*2,e},e.prototype.initPhase2=function(t){var e=t.getCPermSym(),i=15&e;e>>=4;var r=t.getEPermSym(),s=15&r;r>>=4;var o,a=t.getMPerm(),c=O(r,s,!1),h=O(e,i,!0),l=Math.max(g(mt,pt,24*e+lt[a][i]),g(xt,vt,r*n+ft[255&Z[e]][I[s][i]]),g(xt,vt,(c>>4)*n+ft[255&Z[h>>4]][I[15&c][15&h]])),u=Math.min(13,this.sol-this.length1);if(l>=u)return l>u?2:1;for(o=u-1;o>=l;o--){var f=this.phase2(r,s,e,i,a,o,this.depth1,10);if(f<0)break;o-=f,this.moveSol=[];for(var p=0;p<this.depth1+o;p++)this.appendSolMove(this.move[p]);for(p=this.preMoveLen-1;p>=0;p--)this.appendSolMove(this.preMoves[p]);this.sol=this.moveSol.length,this.moveSol=this.solutionToString()}return o!=u-1&&this.probe>=this.probeMin?0:1},e.prototype.phase1=function(t,e,i){if(0==t.prun&&e<5){if(this.allowShorter||0==e){this.depth1-=e;var r=this.initPhase2Pre();return this.depth1+=e,r}return 1}for(var n=0;n<18;n+=3)if(n!=i&&n!=i-9)for(var s=0;s<3;s++){var o=n+s;if(!this.isRec||o==this.move[this.depth1-e]){var a=this.nodeUD[e].doMovePrun(t,o,!0);if(a>e)break;if(a!=e){if((a=this.nodeUD[e].doMovePrunConj(t,o))>e)break;if(a!=e){if(this.move[this.depth1-e]=o,this.valid1=Math.min(this.valid1,this.depth1-e),0==(r=this.phase1(this.nodeUD[e],e-1,n)))return 0;if(2==r)break}}}}return 1},e.prototype.appendSolMove=function(t){if(0!=this.moveSol.length){var e,i=~~(t/3),r=~~(this.moveSol[this.moveSol.length-1]/3);if(i!=r)if(this.moveSol.length>1&&i%3==r%3&&i==~~(this.moveSol[this.moveSol.length-2]/3))3==(e=(t%3+this.moveSol[this.moveSol.length-2]%3+1)%4)?(this.moveSol[this.moveSol.length-2]=this.moveSol[this.moveSol.length-1],this.moveSol.pop()):this.moveSol[this.moveSol.length-2]=3*i+e;else this.moveSol.push(t);else 3==(e=(t%3+this.moveSol[this.moveSol.length-1]%3+1)%4)?this.moveSol.pop():this.moveSol[this.moveSol.length-1]=3*i+e}else this.moveSol.push(t)},e.prototype.phase2=function(t,e,i,r,s,o,a,h){if(0==t&&0==i&&0==s)return o;for(var u=l[h],f=0;f<10;f++)if(0==(u>>f&1)){var p=ht[s][f],v=at[i][z[r][f]],j=T[15&v][r];v>>=4;var d=ct[t][z[e][f]],b=T[15&d][e],m=O(d>>=4,b,!1),x=O(v,j,!0),y=g(xt,vt,(m>>4)*n+ft[255&Z[x>>4]][I[15&m][15&x]]);if(y>o+1)break;if(y>=o)f+=66>>f&3&o-y;else if((y=Math.max(g(xt,vt,d*n+ft[255&Z[v]][I[b][j]]),g(mt,pt,24*v+lt[p][j])))>=o)f+=66>>f&3&o-y;else{var C=this.phase2(d,b,v,j,p,o-1,a+1,f);if(C>=0)return this.move[a]=c[f],C}}else f+=66>>f&3;return-1},e.prototype.solutionToString=function(){var t="",e=0!=(2&this.verbose)?(this.urfIdx+3)%6:this.urfIdx;if(e<3)for(var i=0;i<this.moveSol.length;++i)t+=a[u[e][this.moveSol[i]]]+" ";else for(i=this.moveSol.length-1;i>=0;--i)t+=a[u[e][this.moveSol[i]]]+" ";return t};var N=[],B=[],T=[],I=[],W=[],z=[],J=[],_=[],q=[],A=[],G=[],H=[],K=[],Q=[],V=[],X=[],Y=[],Z=[],$=[],tt=[],et=[],it=[],rt=[],nt=[],st=[],ot=[],at=[],ct=[],ht=[],lt=[],ut=[],ft=[],pt=[],vt=[],jt=15,dt=15,bt=15,mt=15,xt=15;for(f=0;f<18;f++)N[f]=new M;N[0].initCoord(15120,0,119750400,0),N[3].initCoord(21021,1494,323403417,0),N[6].initCoord(8064,1236,29441808,550),N[9].initCoord(9,0,5880,0),N[12].initCoord(1230,412,2949660,0),N[15].initCoord(224,137,328552,137);for(var gt=0;gt<18;gt+=3)for(var yt=0;yt<2;yt++)M.EdgeMult(N[gt+yt],N[gt],N[gt+yt+1]),M.CornMult(N[gt+yt],N[gt],N[gt+yt+1]);M.urf1=(new M).initCoord(2531,1373,67026819,1367),M.urf2=(new M).initCoord(2089,1906,322752913,2040);var Ct=-1;function Ot(e,i,r,n,s,o,a,c){var h=15&c,l=1==(c>>4&1)?14540032:0,u=c>>8&15,f=c>>12&15,p=c>>16&15,v=(1<<h)-1,j=null==n,d=i*r,b=1==(c>>5&1)?10:18,g=10==b?66:599186,C=x(e,d)-1;if(-1==C){for(var O=0;O<1+(d>>3);O++)e[O]=4294967295;m(e,0,15),C=0}else m(e,d,15^C+1);for(var M=t>0?Math.min(Math.max(C+1,p),f):f;C<M;){var S=C>u,w=S?15:C,k=286331153*w,D=S?C:15;C++,Ct++;var E=15^C,P=0;for(O=0;O<d;O++,P>>=4)if(0!=(7&O)||y((P=e[O>>3])^k)){if((15&P)==w){var F=O%i,L=~~(O/i),U=0,R=0;j&&(R=7&(U=q[F]),U>>=3);for(var N=0;N<b;N++){var B,T=o[L][N];B=j?Y[it[U][J[N<<3|R]]^R^T&v]:s[n[F][N]][T&v];var I=(T>>=h)*i+B,W=x(e,I);if(W==D){if(S){m(e,O,E);break}m(e,I,E);for(var z=1,_=a[T];0!=(_>>=1);z++)if(1==(1&_)){var A=T*i;x(e,A+=j?Y[q[B]^z]:s[B][z^l>>(z<<1)&3])==D&&(m(e,A,E))}}else W<C-1&&(N+=g>>N&3)}}}else O+=7}return m(e,d,C+1^15),C+1}function Mt(t){jt=Ot(ot,2048,324,null,null,et,V,103939),Ct>t||(dt=Ot(nt,495,324,tt,rt,et,V,431619),Ct>t||(bt=Ot(st,495,336,tt,rt,it,Q,431619),Ct>t||(mt=Ot(pt,24,2768,ht,lt,at,X,584244),Ct>t||(xt=Ot(vt,n,2768,ut,ft,ct,X,514084)))))}function St(){if(Ct<0&&(!function(){for(var t=new M,e=new M,s=(new M).initCoord(28783,0,259268407,0),o=(new M).initCoord(15138,0,119765538,7),a=(new M).initCoord(5167,0,83473207,0),l=0;l<8;l++)a.ca[l]|=24;for(l=0;l<16;l++)B[l]=(new M).init(t.ca,t.ea),M.CornMultFull(t,o,e),M.EdgeMult(t,o,e),t.init(e.ca,e.ea),l%4==3&&(M.CornMultFull(t,a,e),M.EdgeMult(t,a,e),t.init(e.ca,e.ea)),l%8==7&&(M.CornMultFull(t,s,e),M.EdgeMult(t,s,e),t.init(e.ca,e.ea));for(l=0;l<16;l++)T[l]=[],I[l]=[],W[l]=[],J[l]=[],z[l]=[];for(l=0;l<16;l++)for(var u=0;u<16;u++)T[l][u]=l^u^84660>>u&l<<1&2,I[T[l][u]][u]=l;t=new M;for(var f=0;f<16;f++)for(u=0;u<18;u++){M.CornConjugate(N[u],I[0][f],t);t:for(var p=0;p<18;p++){for(var v=0;v<8;v++)if(N[p].ca[v]!=t.ca[v])continue t;W[f][u]=p,z[f][h[u]]=h[p];break}f%2==0&&(J[u<<3|f>>1]=W[f][u])}var j=function(t,e,i,r,n,s,o){for(var a=new M,c=new M,h=0,l=n>=2?1:2,u=1!=n?M.EdgeConjugate:M.CornConjugate,f=0;f<t;f++)if(void 0===i[f]){s.call(a,f);for(var p=0;p<16;p+=l){u(a,p,c);var v=o.call(c);0==n&&(Y[h<<3|p>>1]=v),v==f&&(r[h]|=1<<p/l),i[v]=(h<<4|p)/l}e[h++]=f}return h};j(2048,_,q,Q,0,M.prototype.setFlip,M.prototype.getFlip),j(2187,A,G,V,1,M.prototype.setTwist,M.prototype.getTwist),j(40320,H,K,X,2,M.prototype.setEPerm,M.prototype.getEPerm);var d=new M;for(l=0;l<i;l++)S(d.ea,H[l],8,!0),Z[l]=E(d.ea,0,!0)+70*F(H[l],8),t.invFrom(d),$[l]=K[t.getEPerm()];var b=function(i,r,n,s,o,a,c,h){for(var l=0;l<n;l++){i[l]=[],o.call(t,r[l]);for(var u=0;u<s;u++)c(t,N[h?h[u]:u],e),i[l][u]=a.call(e)}};for(t=new M,e=new M,b(it,_,336,18,M.prototype.setFlip,M.prototype.getFlipSym,M.EdgeMult),b(et,A,324,18,M.prototype.setTwist,M.prototype.getTwistSym,M.CornMult),b(ct,H,i,10,M.prototype.setEPerm,M.prototype.getEPermSym,M.EdgeMult,c),b(at,H,i,10,M.prototype.setCPerm,M.prototype.getCPermSym,M.CornMult,c),l=0;l<r;l++){for(tt[l]=[],rt[l]=[],t.setUDSlice(l),u=0;u<18;u++)M.EdgeMult(t,N[u],e),tt[l][u]=e.getUDSlice();for(u=0;u<16;u+=2)M.EdgeConjugate(t,I[0][u],e),rt[l][u>>1]=e.getUDSlice()}for(l=0;l<24;l++){for(ht[l]=[],lt[l]=[],t.setMPerm(l),u=0;u<10;u++)M.EdgeMult(t,N[c[u]],e),ht[l][u]=e.getMPerm();for(u=0;u<16;u++)M.EdgeConjugate(t,I[0][u],e),lt[l][u]=e.getMPerm()}for(l=0;l<n;l++){for(ut[l]=[],ft[l]=[],t.setCComb(l%70),u=0;u<10;u++)M.CornMult(t,N[c[u]],e),ut[l][u]=e.getCComb()+70*(165>>u&1^~~(l/70));for(u=0;u<16;u++)M.CornConjugate(t,I[0][u],e),ft[l][u]=e.getCComb()+70*~~(l/70)}}(),Ct=0),0==Ct)Mt(99);else{if(!(Ct<54))return!0;Mt(Ct)}return!1}return{Search:e,solve:function(t){return(new e).solution(t)},randomCube:function(){var t,e,i=~~(2048*Math.random()),r=~~(2187*Math.random());do{t=~~(Math.random()*o[12]),e=~~(Math.random()*o[8])}while(F(e,8)!=F(t,12));return(new M).initCoord(e,r,t,i).toFaceCube()},fromScramble:function(t){for(var e=-1,i=new M,r=new M,n=0;n<t.length;n++)switch(t[n]){case"U":case"R":case"F":case"D":case"L":case"B":e=3*"URFDLB".indexOf(t[n]);break;case" ":-1!=e&&(M.CornMult(i,N[e],r),M.EdgeMult(i,N[e],r),i.init(r.ca,r.ea)),e=-1;break;case"2":e++;break;case"'":e+=2;break;default:continue}return-1!=e&&(M.CornMult(i,N[e],r),M.EdgeMult(i,N[e],r),i.init(r.ca,r.ea)),r.toFaceCube()},initFull:function(){t=0,St()}}}();"undefined"!==typeof t.exports&&(t.exports=r)},42:function(t,e){var i={format:function(t){var e=new Date(1e3*t),i="";return 0!==e.getMinutes()&&(i="".concat(e.getMinutes(),":")),i+(0!==e.getMinutes()?"".concat(("0"+e.getSeconds()).slice(-2),"."):"".concat(e.getSeconds(),"."))+"".concat(("00"+e.getMilliseconds()).slice(-3))}};t.exports=i},51:function(t,e){var i={makeShortScramble:function(t){for(var e=["U","R","F","D","L","B"],i=["","'","2"],r=[];r.length<t;){var n=e[Math.floor(Math.random()*e.length)],s=i[Math.floor(Math.random()*i.length)];r.length>=1&&n===r[r.length-1].face||r.length>=2&&n===r[r.length-2].face&&("U"===n&&"D"===r[r.length-1].face||"D"===n&&"U"===r[r.length-1].face||"R"===n&&"L"===r[r.length-1].face||"L"===n&&"R"===r[r.length-1].face||"F"===n&&"B"===r[r.length-1].face||"B"===n&&"F"===r[r.length-1].face)||r.push({face:n,turn:s})}var o="";return r.forEach((function(t){o+=t.face+t.turn+" "})),o=o.trim()},makeCorrectScramble:function(t,e){var i=t.split(" "),r=[];i.forEach((function(t){var e=t.split("");1===e.length&&e.push(""),r.push(e)}));var n=e.split(" "),s=[];n.forEach((function(t){var e=t.split("");1===e.length&&e.push(""),s.push(e)}));for(var o=r.slice(),a=s.slice(),c=!0,h=0;c;)r[r.length-(h+1)][0]!==s[h][0]?c=!1:""===r[r.length-(h+1)][1]&&"'"===s[h][1]||"'"===r[r.length-(h+1)][1]&&""===s[h][1]||"2"===r[r.length-(h+1)][1]&&"2"===s[h][1]?(o.pop(),a.shift(),h++):"'"===r[r.length-(h+1)][1]&&"2"===s[h][1]||"2"===r[r.length-(h+1)][1]&&"'"===s[h][1]?(o[o.length-(h+1)][1]="",a.shift(),c=!1):""===r[r.length-(h+1)][1]&&""===s[h][1]||"2"===r[r.length-(h+1)][1]&&""===s[h][1]?(o[o.length-(h+1)][1]="'",a.shift(),c=!1):(""===r[r.length-(h+1)][1]&&""===s[h][1]||"'"===r[r.length-(h+1)][1]&&"'"===s[h][1])&&(o[o.length-(h+1)][1]="2",a.shift(),c=!1);var l=o.concat(a),u="";return l.forEach((function(t){u+=t[0]+t[1]+" "})),u}};t.exports=i},52:function(t,e){var i=function(){var t={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B",6:"E",7:"M",8:"S",9:"x",10:"y",11:"z",12:"u",13:"r",14:"f",15:"d",16:"l",17:"b"},e={U:0,R:1,F:2,D:3,L:4,B:5,E:6,M:7,S:8,x:9,y:10,z:11,u:12,r:13,f:14,d:15,l:16,b:17},i=function(t){var i,r,n,s,o,a,c;if("string"===typeof t){for(c=[],i=0,r=(a=t.split(/\s+/)).length;i<r;i++)if(0!==(s=a[i]).length){if(s.length>2)throw new Error("Invalid move: ".concat(s));if(void 0===(n=e[s[0]]))throw new Error("Invalid move: ".concat(s));if(1===s.length)o=0;else if("2"===s[1])o=1;else{if("'"!==s[1])throw new Error("Invalid move: ".concat(s));o=2}c.push(3*n+o)}return c}return null!=t.length?t:[t]};return{inverse:function(e){var r,n,s,o,a,c,h;if((c=function(){var t,n,s,c;for(c=[],t=0,n=(s=i(e)).length;t<n;t++)o=s[t],r=o/3|0,a=o%3,c.push(3*r-(a-1)+1);return c}()).reverse(),"string"===typeof e){for(h="",n=0,s=c.length;n<s;n++)o=c[n],h+=t[r=o/3|0],1===(a=o%3)?h+="2":2===a&&(h+="'"),h+=" ";return h.substring(0,h.length-1)}return null!=e.length?c:c[0]}}}();t.exports=i},76:function(t,e,i){},84:function(t,e,i){"use strict";i.r(e);var r=i(0),n=i(11),s=i.n(n),o=(i(76),i(61)),a=i(9),c=i(105),h=i(106),l=i(108),u=i(34),f=i(109),p=i(122),v=i(2),j=function(t){var e=Object(c.a)((function(t){return{container:{margin:"40px auto",padding:"20px",maxWidth:"500px"},link:{margin:"20px 0"}}}))();return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{position:"relative",children:Object(v.jsx)(l.a,{children:Object(v.jsx)(u.a,{children:"\u8a70\u3081\u30ad\u30e5\u30fc\u30d6"})})}),Object(v.jsxs)(p.a,{className:e.container,maxWidth:"xs",display:"flex",flexDirection:"column",children:[Object(v.jsx)(p.a,{display:"flex",justifyContent:"center",children:Object(v.jsx)(u.a,{variant:"h3",children:"\u904a\u3073\u65b9"})}),Object(v.jsx)(p.a,{className:e.link,display:"flex",justifyContent:"center",children:Object(v.jsxs)(u.a,{variant:"body1",children:["\u8a70\u3081\u30ad\u30e5\u30fc\u30d6\u3068\u306f\u3001\u3042\u3068\u6570\u624b\u3067\u89e3\u3051\u308b\u30b9\u30af\u30e9\u30f3\u30d6\u30eb\u3092\u6700\u5c11\u306e\u624b\u6570\u3067\u89e3\u304f\u30b9\u30d4\u30fc\u30c9\u7af6\u6280\u3067\u3059",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"\u30db\u30fc\u30e0\u753b\u9762\u3067\u30b9\u30bf\u30fc\u30c8\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u30b2\u30fc\u30e0\u304c\u958b\u59cb\u3057\u307e\u3059",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"\u30b9\u30af\u30e9\u30f3\u30d6\u30eb\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u305d\u306e\u6700\u77ed\u89e3\u6cd5\u3092\u63a2\u3057\u51fa\u3057\u3066\u5165\u529b\u3057\u3001\u56de\u7b54\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"\u6b63\u89e3\u3059\u308b\u3068\u304b\u304b\u3063\u305f\u6642\u9593\u304c\u8a18\u9332\u3055\u308c\u3001\u8a18\u9332\u4e00\u89a7\u753b\u9762\u3067\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059",Object(v.jsx)("br",{})]})}),Object(v.jsx)(p.a,{className:e.link,display:"flex",justifyContent:"center",children:Object(v.jsx)(f.a,{variant:"contained",onClick:function(){return t.history.push("/")},children:"\u623b\u308b"})})]})]})},d=i(62),b=i(14),m=i(27),x=i.n(m),g=i(60),y=i.n(g),C=i(51),O=i.n(C),M=i(42),S=i.n(M),w=i(52),k=i.n(w),D=i(123),E=i(110),P=i(111),F=i(112),L=i(113),U=function(t){var e=Object(c.a)((function(t){return{content:{margin:t.spacing(1),width:"120px",height:"30px"}}}))();return Object(v.jsx)(f.a,{className:e.content,onClick:t.onClick,variant:"contained",color:"primary",children:t.children})},R=function(t){var e=Object(c.a)((function(t){return{content:{margin:t.spacing(1),height:"30px"}}}))();return Object(v.jsx)(f.a,{className:e.content,onClick:t.onClick,variant:"contained",color:"secondary",children:t.children})},N=function(t){var e=Object(c.a)((function(t){return{error:{color:"red"}}}))();return null===t.message?null:Object(v.jsx)(u.a,{className:e.error,children:t.message})};var B=function(t){var e=Object(c.a)((function(t){return{container:{margin:"0 auto",padding:"20px",maxWidth:"500px"},inputContent:{backgroundColor:"lightgray"},display:{margin:"15px 0"},errorDisplay:{margin:"10px 0",height:"20px"}}}))(),i=Number(t.location.state.moveCount),n=Object(r.useRef)(null),s=Object(r.useState)(0),o=Object(b.a)(s,2),a=o[0],j=o[1],m=Object(r.useState)(0),g=Object(b.a)(m,2),C=g[0],M=g[1],w=Object(r.useState)(0),B=Object(b.a)(w,2),T=B[0],I=B[1],W=Object(r.useState)(""),z=Object(b.a)(W,2),J=z[0],_=z[1],q=Object(r.useState)(""),A=Object(b.a)(q,2),G=A[0],H=A[1],K=Object(r.useState)([]),Q=Object(b.a)(K,2),V=Q[0],X=Q[1],Y=Object(r.useState)(""),Z=Object(b.a)(Y,2),$=Z[0],tt=Z[1],et=Object(r.useState)(!1),it=Object(b.a)(et,2),rt=it[0],nt=it[1],st=Object(r.useState)(null),ot=Object(b.a)(st,2),at=ot[0],ct=ot[1],ht=Object(r.useState)({5:[],6:[],7:[]}),lt=Object(b.a)(ht,2),ut=lt[0],ft=lt[1];Object(r.useEffect)((function(){if(localStorage.storageData){var t=JSON.parse(localStorage.storageData);ft(t)}return pt(),function(){jt()}}),[]);var pt=function(){j(0),M(0),I(0),X([]),tt(""),nt(!1),function(){var t=O.a.makeShortScramble(i);_(t);var e=t+" B' D' L' F' U' R' B' D' L' F' U' R'",r=k.a.inverse(x.a.solve(x.a.fromScramble(e))),n=O.a.makeCorrectScramble(r,"R U F L D B R U F L D B");H(n)}(),vt()},vt=function(){null===n.current&&(I((new Date).getTime()),n.current=setInterval((function(){j((function(t){return t+1}))}),1e3))},jt=function(){null!==n.current&&(clearInterval(n.current),n.current=null)},dt=function(t){var e="";return t.forEach((function(t){e+=t+" "})),e};return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{position:"relative",children:Object(v.jsx)(l.a,{children:Object(v.jsx)(u.a,{children:"\u8a70\u3081\u30ad\u30e5\u30fc\u30d6"})})}),Object(v.jsxs)(p.a,{className:e.container,maxWidth:"xs",display:"flex",flexDirection:"column",children:[Object(v.jsxs)(p.a,{display:"flex",justifyContent:"space-between",children:[Object(v.jsx)(f.a,{variant:"contained",onClick:function(){return t.history.push("/")},children:"\u623b\u308b"}),Object(v.jsx)(u.a,{variant:"h5",children:y()(1e3*a).format("mm:ss")})]}),Object(v.jsx)(p.a,{display:"flex",justifyContent:"center",children:Object(v.jsx)(u.a,{children:"\u30b9\u30af\u30e9\u30f3\u30d6\u30eb"})}),Object(v.jsx)(p.a,{display:"flex",justifyContent:"center",children:Object(v.jsx)(u.a,{className:e.display,children:G})}),Object(v.jsx)(p.a,{display:"flex",justifyContent:"center",className:e.inputContent,children:Object(v.jsxs)(u.a,{children:["\u81ea\u5206\u306e\u56de\u7b54: ",$]})}),Object(v.jsxs)(p.a,{className:e.errorDisplay,display:"flex",justifyContent:"center",children:[Object(v.jsx)(N,{message:at}),"\xa0"]}),Object(v.jsxs)(p.a,{display:"flex",justifyContent:"center",children:[Object(v.jsx)(U,{onClick:function(){if(x.a.solve(x.a.fromScramble(k.a.inverse(J)))===x.a.solve(x.a.fromScramble($))){jt();var t=((new Date).getTime()-T)/1e3,e=Object(d.a)({},ut);e[i.toString()].push(t),localStorage.setItem("storageData",JSON.stringify(e)),nt(!0),M(t),ft(e)}else ct("\u4e0d\u6b63\u89e3!"),setTimeout((function(){ct(null)}),3e3)},children:"\u56de\u7b54\u3059\u308b"}),Object(v.jsx)(U,{onClick:function(){var t=V;0!==t.length&&t.pop(),X(t),tt(dt(t))},children:"1\u6587\u5b57\u524a\u9664"})]}),[["U","U'","U2"],["D","D'","D2"],["R","R'","R2"],["L","L'","L2"],["F","F'","F2"],["B","B'","B2"]].map((function(t,e){return Object(v.jsx)(p.a,{display:"flex",justifyContent:"center",children:t.map((function(t,i){return Object(v.jsx)(R,{onClick:function(){return function(t){var e=V;e.push(t),X(e),tt(dt(e))}(t)},children:t},10*(e+1)+i)}))},e+1)}))]}),Object(v.jsxs)(D.a,{open:rt,children:[Object(v.jsx)(E.a,{children:"\u6b63\u89e3!"}),Object(v.jsx)(P.a,{children:Object(v.jsxs)(F.a,{align:"center",children:["\u304a\u898b\u4e8b!",Object(v.jsx)("br",{}),"\u304b\u304b\u3063\u305f\u6642\u9593: ",S.a.format(C)]})}),Object(v.jsxs)(L.a,{children:[Object(v.jsx)(f.a,{onClick:pt,children:"\u3082\u3046\u4e00\u5ea6"}),Object(v.jsx)(f.a,{onClick:function(){return t.history.push("/")},children:"\u30db\u30fc\u30e0\u306b\u623b\u308b"})]})]})]})},T=i(114),I=i(125),W=i(115),z=function(t){var e=Object(c.a)((function(t){return{container:{margin:"40px auto",padding:"20px",maxWidth:"500px"},link:{margin:"20px 0"}}}))(),i=Object(r.useState)(!1),n=Object(b.a)(i,2),s=n[0],o=n[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{position:"relative",children:Object(v.jsx)(l.a,{children:Object(v.jsx)(u.a,{children:"\u8a70\u3081\u30ad\u30e5\u30fc\u30d6"})})}),Object(v.jsxs)(p.a,{className:e.container,maxWidth:"xs",display:"flex",flexDirection:"column",children:[Object(v.jsx)(p.a,{display:"flex",justifyContent:"center",children:Object(v.jsx)(u.a,{variant:"h3",children:"\u8a70\u3081\u30ad\u30e5\u30fc\u30d6"})}),Object(v.jsx)(p.a,{className:e.link,display:"flex",justifyContent:"center",children:Object(v.jsx)(f.a,{variant:"contained",size:"large",onClick:function(){return o(!0)},children:"\u30b9\u30bf\u30fc\u30c8"})}),Object(v.jsx)(p.a,{className:e.link,display:"flex",justifyContent:"center",children:Object(v.jsx)(f.a,{variant:"contained",size:"large",onClick:function(){return t.history.push("/about")},children:"\u904a\u3073\u65b9"})}),Object(v.jsx)(p.a,{className:e.link,display:"flex",justifyContent:"center",children:Object(v.jsx)(f.a,{variant:"contained",size:"large",onClick:function(){return t.history.push("/results")},children:"\u8a18\u9332"})})]}),Object(v.jsx)(D.a,{onClose:function(){return o(!1)},open:s,children:Object(v.jsx)(T.a,{children:[5,6,7].map((function(e){return Object(v.jsx)(I.a,{button:!0,onClick:function(){return t.history.push({pathname:"game",state:{moveCount:e}})},children:Object(v.jsx)(W.a,{primary:e+"\u624b\u30b9\u30af\u30e9\u30f3\u30d6\u30eb\u306b\u6311\u6226"})},e)}))})})]})},J=i(124),_=i(117),q=i(119),A=i(120),G=i(121),H=i(118),K=i(116),Q=function(t){var e=Object(c.a)((function(t){return{table:{width:"300px"}}}))();return Object(v.jsx)("div",{hidden:t.value!==t.index,children:Object(v.jsx)(_.a,{className:e.table,children:Object(v.jsx)(H.a,{children:Object(v.jsx)(q.a,{children:t.storageData.sort((function(t,e){return t-e})).slice(0,10).map((function(t,e){return Object(v.jsxs)(A.a,{children:[Object(v.jsxs)(G.a,{align:"center",children:[e+1,"\u4f4d"]}),Object(v.jsx)(G.a,{align:"center",children:S.a.format(t)})]},e)}))})})})})},V=function(t){var e=Object(c.a)((function(t){return{container:{margin:"0 auto",padding:"20px",maxWidth:"500px"},link:{margin:"20px 0"}}}))(),i=Object(r.useState)({5:[],6:[],7:[]}),n=Object(b.a)(i,2),s=n[0],o=n[1],a=Object(r.useState)(0),j=Object(b.a)(a,2),d=j[0],m=j[1];Object(r.useEffect)((function(){if(localStorage.storageData){var t=JSON.parse(localStorage.storageData);o(t)}}),[]);return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{position:"relative",children:Object(v.jsx)(l.a,{children:Object(v.jsx)(u.a,{children:"\u8a70\u3081\u30ad\u30e5\u30fc\u30d6"})})}),Object(v.jsxs)(p.a,{className:e.container,maxWidth:"xs",display:"flex",flexDirection:"column",children:[Object(v.jsx)(p.a,{display:"flex",children:Object(v.jsx)(f.a,{variant:"contained",onClick:function(){return t.history.push("/")},children:"\u623b\u308b"})}),Object(v.jsx)(p.a,{display:"flex",justifyContent:"center",children:Object(v.jsx)(u.a,{variant:"h3",children:"\u8a18\u9332"})}),Object(v.jsx)(p.a,{display:"flex",justifyContent:"center",children:Object(v.jsxs)(J.a,{value:d,onChange:function(t,e){m(e)},children:[Object(v.jsx)(K.a,{label:"5\u624b"}),Object(v.jsx)(K.a,{label:"6\u624b"}),Object(v.jsx)(K.a,{label:"7\u624b"})]})}),Object(v.jsxs)(p.a,{className:e.link,display:"flex",justifyContent:"center",children:[Object(v.jsx)(Q,{value:d,index:0,storageData:s[5]}),Object(v.jsx)(Q,{value:d,index:1,storageData:s[6]}),Object(v.jsx)(Q,{value:d,index:2,storageData:s[7]})]})]})]})},X=function(){return Object(v.jsx)(o.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)(a.a,{exact:!0,path:"/",component:z}),Object(v.jsx)(a.a,{path:"/about",component:j}),Object(v.jsx)(a.a,{path:"/game",component:B}),Object(v.jsx)(a.a,{path:"/results",component:V})]})})};s.a.render(Object(v.jsx)(X,{}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.8a237db3.chunk.js.map