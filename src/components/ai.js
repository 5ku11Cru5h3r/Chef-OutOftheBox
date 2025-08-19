import { GoogleGenerativeAI } from "@google/generative-ai"
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

// Initialize the AI client
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

export async function generateRecipe(ingredients , preference) {
    try {
        const ingredientsString = ingredients.join(", ")
        
        // Get the model
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })

        const result = await model.generateContent([
            SYSTEM_PROMPT,
            `I have ${ingredientsString}. Please give me a recipe you'd recommend I make also do suggest additional ingredients! according to ${preference}`
        ])
        
        const response = await result.response
        return response.text()
        
    } catch (error) {
        console.error("Error generating recipe:", error)
        throw error
    }
}