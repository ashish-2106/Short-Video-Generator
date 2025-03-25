import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        pictureURL: v.string(),
        credits: v.number(),
    }),
    videoData: defineTable({
        script: v.string(),
        topic: v.string(),
        title: v.string(),
        caption: v.any(),
        videoStyle: v.string(),
        voice: v.string(),
        audioUrl: v.optional(v.string()),  // ✅ Add this line
        uid: v.id('users'),
        createdBy: v.string(),
        captionJson: v.optional(v.any()),
        images: v.optional(v.any()),
        status: v.optional(v.string())
    }),
});