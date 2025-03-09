import React, { useState } from 'react'
import { Dummydata } from './Dummydata';
import { useParams } from "react-router-dom";
import '../Singlepage/Animate.css'
import Addimage from '../../assets/img/about.jpg'
import Addimage2 from '../../assets/img/animal-lg-2.jpg'
import Addimage3 from '../../assets/img/bg-2.jpg'
import Addimage4 from '../../assets/img/bg-1.jpg'
import './Dummy.css'
import DummyPost from './DummyPost';
// import Addimage5 from '../../assets/img/testimonial-2.jpg'
// import Comments from '../Comments/Comments';
export default function SinglePage() {

    const { id } = useParams()
    const postData =Dummydata.find((p)=> p.id === parseInt(id))
	
    if (!postData) {
        return <h2 style={{ textAlign: "center" }}>Post not found!</h2>;
      }

  return (
    <>
    
      <div className="site-content">
      
	<div className="container">
		{/* <!-- Content */}

		<div className="main-content">
			{/* <!-- Begin Article */}
        
			<div className="row">
				{/* <!-- Sidebar --> */}
				
				<div className="col-sm-4">
    <div className="sidebar">
	<div className="sidebar-section p-6 bg-white shadow-lg rounded-lg">
    <h5 className="text-lg font-semibold mb-4 text-gray-800"><span>Newsletter</span></h5>
    <div id="mc_embed_signup">
        <form className="validate space-y-4" >
            <h2 className="text-gray-700 text-sm font-medium">
                Sign up to get our weekly free guide to selling digital downloads
            </h2>
            <div className="mc-field-group">
                <input 
                    type="email" 
                    name="EMAIL" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                    placeholder="E-mail Address" 
                    aria-required="true" 
                />
            </div>
            <div id="mce-responses" className="clear hidden">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
            </div>
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
			<input
                        type="email"
                        name="EMAIL"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="E-mail Address"
                      
                        
                        required
                    />
            </div>
            <div className="clear">
                <input 
                    type="submit" 
                    value="Subscribe"
                    name="subscribe" 
					
                    id="mc-embedded-subscribe" 
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-all cursor-pointer"
                />
				
            </div>
        </form>
    </div>
</div>

		<div className="sidebar-section p-4 bg-white shadow-md rounded-lg">
    <h5 className="text-lg font-semibold mb-3"><span>Useful</span></h5>
    <ul className="space-y-2">
        <li>
            <a href="#" target="_blank" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all rounded-md">Digital Ocean</a>
        </li>
        <li>
            <a href="#" target="_blank" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all rounded-md">Cloudways</a>
        </li>
        <li>
            <a href="#" target="_blank" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all rounded-md">Page Speed Test</a>
        </li>
        <li>
            <a href="#" target="_blank" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all rounded-md">Elementor Page Builder</a>
        </li>
        <li>
            <a href="#" target="_blank" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all rounded-md">Our Freebies</a>
        </li>
    </ul>
</div>

        <div className="sidebar-section">
            <h5><span>Recommended</span></h5>
            <a href="https://easydigitaldownloads.com/?ref=2135" title="Sell digital downloads with WordPress, for free"><img src={Addimage} style={{marginBottom:"15px"}}  alt="Sell digital downloads with WordPress, for free" /></a>
            <a href="https://easydigitaldownloads.com/?ref=2135" title="Sell digital downloads with WordPress, for free"><img src={Addimage2 }  style={{marginBottom:"15px"}} alt="Sell digital downloads with WordPress, for free" /></a>
            <a href="https://easydigitaldownloads.com/?ref=2135" title="Sell digital downloads with WordPress, for free"><img src={Addimage3} style={{marginBottom:"15px"}} alt="Sell digital downloads with WordPress, for free" /></a>
            <a href="https://easydigitaldownloads.com/?ref=2135" title="Sell digital downloads with WordPress, for free"><img src={Addimage4}  style={{marginBottom:"15px"}} alt="Sell digital downloads with WordPress, for free" /></a>
        </div>
    </div>
                 </div>


				
				{/* <!-- Sidebar --> */}

				{/* <!-- Post --> */}
				<div className="col-sm-8">


					<div className="mainheading">
						{/* <!-- Post Categories --> */}
						<div className="after-post-tags">
							<ul className="tags">
								<li>
								<a href="#">bootstrap</a>
								</li>
								<li>
								<a href="#">tutorial</a>
								</li>
							</ul>
						</div>
						{/* <!-- End Categories -->
						<!-- Post Title --> */}
						<h1 className="posttitle animated-underline">{postData.title}</h1>
					</div>
					{/* <!-- Post Featured Image --> */}
					<img className="featured-image img-fluid" src={postData.img}alt="" />
					{/* <!-- End Featured Image -->
					<!-- Post Content --> */}
					<div className="article-post">
						<p>
							{
                                postData.content.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))
                            }
						</p>
						<p>
							As for this particular rendition of Charles Perrault’s classNameic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original — which sees Little Red Riding Hood being gobbled up as well as her grandmother — is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother.
						</p>
						<blockquote>
							<p>
								It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story.
							</p>
						</blockquote>
						<p>
							An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.
						</p>
						<p>
							The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes.
						</p>
						<div className="clearfix">
						</div>
					</div>
					{/* <!-- Post Date --> */}
					<p>
						<small>
						<span className="post-date"><time className="post-date" >{postData.Date}</time></span>
						</small>
					</p>
					{/* <!-- Prev/Next --> */}
					{/* <div className="row PageNavigation mt-4 prevnextlinks">
						<div className="col-md-6 rightborder pl-0">
							<a className="thepostlink">« Red Riding Hood</a>
						</div>
						<div className="col-md-6 text-right pr-0">
							<a className="thepostlink" href="single-right-sidebar.html">We all wait for summer »</a>
						</div>
					</div> */}
					{/* <!-- End Prev/Next -->
					<!-- Author Box --> */}
				
  
				{/* <!-- End Post --> */}
			
            </div>
			{/* <!-- End Article */}
       
		</div>
	</div>

	
	{/* <!-- Begin Footer */}
 

	{/* <!-- End Footer */}

</div>
</div>

</>
  )
}
