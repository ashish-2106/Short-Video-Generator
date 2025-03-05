import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createNewUser = mutation({
    args: {
        name: v.optional(v.string()),  // ✅ Name can be optional
        email: v.optional(v.string()), // ✅ Allow missing emails
        pictureURL: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        if (!args.email) {
            console.warn("Skipping user creation: Missing email");
            return null;
        }

        const existingUser = await ctx.db.query("users")
            .filter((q) => q.eq(q.field("email"), args.email))
            .collect();

        if (!existingUser[0]?.email) {
            const result = await ctx.db.insert("users", {
                name: args.name || "Anonymous", // ✅ Default name if missing
                email: args.email,
                pictureURL: args.pictureURL || "",
                credits: 3 // ✅ Default credits
            });
            return result;
        }
        return existingUser[0];
    }
});
