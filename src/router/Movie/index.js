export default{
    path:'/movie',
    component:()=>import('@/views/Movie'),
    children:[
        {path:'/movie/ctiy',component:()=>import("@/views/Movie/Body/Ctiy")},
        {path:'/movie/coming',component:()=>import("@/views/Movie/Body/Coming")},
        {path:'/movie/now',component:()=>import("@/views/Movie/Body/Now")},
        {path:'/movie/search',component:()=>import("@/views/Movie/Body/Search")}
    ],
    redirect:"/movie/now"
    
}