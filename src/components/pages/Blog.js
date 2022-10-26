import React from 'react';

const Blog = () => {
    return (
        <div className='w-full py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className="card w-full bg-base-100 shadow-xl">                    
                    <div className="card-body px-5">
                        <h2 className="card-title">What is cors?</h2>
                        <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">                    
                    <div className="card-body px-5">
                        <h2 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h2>
                        <p>Because Firebase gives Website developers access to a complete range of fully managed mobile-centric services including analytics, authentication and Realtime Database. Cloud Functions rounds out the offering by providing a way to extend and connect the behavior of Firebase features through the addition of server-side code.</p>
                        <p>There are a lot of option instead of firebase these are: Back4App, Backendless, Kuzzle,Appwrite,Deployd,NHost,AWS Amplify, Heroku and so on.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">                    
                    <div className="card-body px-5">
                        <h2 className="card-title">How does the private route work?</h2>
                        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                    </div>
                </div>                
                <div className="card w-full bg-base-100 shadow-xl">                    
                    <div className="card-body px-5">
                        <h2 className="card-title">What is Node? How does Node work?</h2>
                        <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                        <p>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                        Node.js basically works on two concept: Asynchronous, Non-blocking I/O</p>
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default Blog;