import { v } from "convex/values";
import { mutation, query } from "./_generated/server";  // ✅ Add query here



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
        credits:v.number()
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
            createdBy: args.createdBy,
            status: 'pending'
        })
        await ctx.db.patch(args.uid,{
            credits:(args.credits)-1
        })
        return result;
    }
     
})

export const UpdateVideoRecord = mutation({
    args: {
        recordID: v.id('videoData'),
        audioUrl: v.optional(v.string()),  // ✅ Ensure the field name matches the schema
        images: v.optional(v.any()),
        captionJson: v.optional(v.any()),
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.patch(args.recordID, {
            audioUrl: args.audioUrl,  // ✅ Ensure correct field name
            captionJson: args.captionJson,
            images: args.images,
            status: 'completed'
        });
        return result;
    }
});

export const GetUserVideos =query({
    args:{
        uid:v.id('users')
    },
    handler:async(ctx,args)=>{
        const result = await ctx.db.query('videoData')
        .filter(q=>q.eq(q.field('uid'),args.uid))
        .order('desc')
        .collect();
        return result;
    }
})

export const GetVideoDataByID = query({
    args:{
        videoID:v.id('videoData')
    },
    handler:async(ctx,args)=>{
        const result = await ctx.db.get(args.videoID);
        return result;
    }
})