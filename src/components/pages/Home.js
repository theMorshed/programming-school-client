import React from 'react';

const Home = () => {
    return (
        <div className='py-10'>
            <h2 className='text-3xl text-center mt-10 underline underline-offset-2'>Our Popular subjects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>                
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Mathmatics</h2>
                        <p>Mathmatics is highly important subject for recent world..</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Programming</h2>
                        <p>If you want to learn programming with our awesome instructor then come here.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Statistics</h2>
                        <p>Statistics is the another important subject for doing a great things..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;