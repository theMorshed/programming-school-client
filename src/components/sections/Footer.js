import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <span className="footer-title">Category</span>
                <a className="link link-hover">Computer Science</a>
                <a className="link link-hover">Mathmatics</a>
                <a className="link link-hover">Statistics</a>
                <a className="link link-hover">Learning</a>
            </div>
            <div>
                <span className="footer-title">Instructor</span>
                <a className="link link-hover">Tamim Shahriar subeen</a>
                <a className="link link-hover">Jhankar mahbub</a>
                <a className="link link-hover">Hasin Hayder</a>
                <a className="link link-hover">Sumit Saha</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
                <p className='mt-3'>&copy; Copyright 2023, Programming School</p>
            </div>            
        </footer>
    );
};

export default Footer;