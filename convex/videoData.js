import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createVideoData = mutation({
    args:{
        script: v.string(),
        topic: v.string(),
        title: v.string(),
        caption: v.any(),
        videoStyle: v.string(),
        voice: v.string(),
        uid: v.id('users'),
        createdBy:v.string(),
    },
    handler:async(ctx,args)=>{
        const result = await ctx.db.insert('videoData',{
            script: args.script,
            topic: args.topic,
            title: args.title,
            caption: args.caption,
            videoStyle: args.videoStyle,
            voice: args.voice,
            uid: args.uid,
            createdBy: args.createdBy
        })
        return result;
    }
     
})