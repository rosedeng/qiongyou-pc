import base from './base'
import req from './request'
import req2 from './req2'
import req3 from './req3'

export const getBannerList=()=>req.get(base.host+base.bannerUrl)

export const login=(params)=>req2.get(base.baseHost+base.loginUrl,{params})

export const getUser=()=>req2.post(base.baseHost+base.aboutUrl)

// blueBerryjam_id:1
export const getLanmeiList=(params)=>req.get(base.host+base.lanmei,{params})

export const getNewsList=(type,num)=>{

    return req3.get(base.news+type+'/'+(num-1)*10+'-10.html').then(res=>{
        console.log(JSON.parse(res.slice(9,-1)))
        let data=JSON.parse(res.slice(9,-1))
        return data[type]
    })
    
}

export const getTravel=(params)=>req.get(base.search,{params})

export const getTuijian=()=>req.get(base.tuijian)

//export const getYiyuan=()=>req.get(base.yiyuan)
