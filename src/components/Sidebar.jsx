import React from 'react'

function Sidebar(props) {
    const { handleShowSidebar, data } = props
    return (
        <div className='sidebar'>
            <div className="sidebar-bg" onClick={handleShowSidebar}></div>
            <div className="sidebar-content">

                <h2>{data?.title}</h2>

                <div className='sidebar-desc-container'>
                    <p className='sidebar-desc-date'>{data?.date}</p>
                    <p>{data?.explanation} Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, natus! Minima perferendis nisi repudiandae labore voluptates vitae vero laudantium rerum magnam, modi harum dignissimos aliquid ratione. Porro, aperiam nam! Cum facere enim quo exercitationem quam similique iure voluptate, odio quae non, possimus maiores blanditiis, voluptatum delectus. Harum in sapiente ullam sint, enim quasi corporis doloribus quae qui maiores, iure recusandae, fuga laudantium dicta provident est inventore nam cum dolore aperiam iusto quam vitae reprehenderit dignissimos! Vero, ipsum vel perspiciatis repellendus vitae est. Asperiores quis ipsam fuga laudantium voluptatum autem iusto? In aliquam explicabo accusamus est, non eos. Sed rerum consequuntur molestias at, tenetur exercitationem dolorum laborum hic in, incidunt ea sapiente, labore id consequatur voluptatum harum suscipit? Id in, eos quam ad at itaque quas optio officiis incidunt velit sequi fugit aspernatur adipisci quaerat odit, nisi similique commodi dignissimos assumenda et! Totam illum, impedit animi nostrum sed, reiciendis vitae quos molestias laboriosam voluptas dolore beatae cupiditate commodi ipsum dolorem labore quae nesciunt incidunt voluptatem nulla. Ea porro provident deserunt nostrum dolores totam tenetur fugit vel obcaecati. Excepturi deserunt doloribus inventore debitis. Culpa non labore mollitia odit, quod quibusdam fugiat voluptatum ratione, suscipit exercitationem vel quasi! Magnam odit sunt ratione! Aperiam ullam, quam corporis repellat facere ea cum tenetur voluptatem consequuntur fugiat! Reprehenderit animi, quia assumenda est voluptatum perferendis qui molestias ea soluta quidem repellendus amet hic, deleniti placeat ipsam quas? Esse, natus tenetur. Quasi quae, error fugiat iusto dolor consequatur ad. Natus voluptatum architecto ipsam pariatur, sequi voluptatem amet? Repudiandae ratione atque corrupti, dolorem molestiae possimus quidem cumque molestias natus vel temporibus soluta eligendi iste debitis enim, eveniet distinctio recusandae dolore nemo laudantium aperiam asperiores similique cupiditate. Odit fugit in, soluta sapiente hic praesentium impedit omnis enim, ullam sint iusto, veniam ut sed eveniet labore illum vel. Provident, perferendis consectetur!</p>
                </div>
                <button onClick={handleShowSidebar}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Sidebar
