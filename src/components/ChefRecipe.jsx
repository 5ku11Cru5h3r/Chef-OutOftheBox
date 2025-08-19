import Markdown from 'https://esm.sh/react-markdown@10'
export default function ChefRecipe(prop){
    const markdown = prop.recipe;
    return (
        <section className='suggested-recipe'>
            <Markdown>{markdown}</Markdown>
        </section>
    )
}