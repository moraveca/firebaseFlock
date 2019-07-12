import React, { Component } from "react";
import Footer from "../components/Footer";




class SignIn extends Component {

    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid" id="resource-jumbo">
                    <div class="container">
                        <div id="logo-box">
                            {/* <a class="navbar-brand" id="logo">
                                <img src="Flock-transparent.png" id="small-logo" alt="Flock logo" />
                            </a> */}
                            <div id="resources-box">
                                <h1>Resources</h1>
                                <p>For parents and volunteer families</p>
                            </div>
                        </div>
                    </div>
                </div>


            <div className="container">
                <div className="row"  id="resource-page">
                    <div className="col-lg-5">
                        <h5>Parenting - General</h5>
                        <p><a id="res-link" href="https://www.cafemom.com" target="_blank" rel="noopener noreferrer">Aha! Parenting</a></p>
                        <p><a id="res-link" href="https://childdevelopmentinfo.com" target="_blank" rel="noopener noreferrer">Child Development Institute</a></p>
                        <p><a id="res-link" href="https://theparentcue.org" target="_blank" rel="noopener noreferrer">The Parent Cue</a></p>
                        <p><a id="res-link" href="http://kidshealth.com" target="_blank" rel="noopener noreferrer">Kids' Health</a></p>
                        <p><a id="res-link" href="https://www.cafemom.com" target="_blank" rel="noopener noreferrer">Cafe Mom</a></p>
                        <p><a id="res-link" href="https://www.fatherly.com" target="_blank" rel="noopener noreferrer">Fatherly</a></p>
                        <p><a id="res-link" href="https://www.athomedad.org" target="_blank" rel="noopener noreferrer">At-Home Dad Network</a></p>
                        <p><a id="res-link" href="https://www.scarymommy.com" target="_blank" rel="noopener noreferrer">Scary Mommy</a></p>
                        <h5>Pregnancy and Babies</h5>
                        <p><a id="res-link" href="https://community.babycenter.com/" target="_blank" rel="noopener noreferrer">Babycenter - Community</a></p>
                        <p><a id="res-link" href="https://www.thebump.com" target="_blank" rel="noopener noreferrer">Pregnancy, Parenting and Baby Info</a></p>
                        <p><a id="res-link" href="https://www.bundoo.com" target="_blank" rel="noopener noreferrer">Baby Milestones and Child Development</a></p>
                        <p><a id="res-link" href="https://www.parents.com" target="_blank" rel="noopener noreferrer">Pregnancy, Birth, Babies, Parenting</a></p>
                        <h5>Toddlers</h5>
                        <p><a id="res-link" href="https://www.parents.com/toddlers-preschoolers" target="_blank" rel="noopener noreferrer">Toddlers and Preschoolers: Tips
                        and Advice</a></p>
                        <p><a id="res-link" href="https://www.ahaparenting.com/Ages-stages/toddlers" target="_blank" rel="noopener noreferrer"> Positive Parenting Tips
                        for Toddlers</a></p>
                        <p><a id="res-link" href="https://www.liveabout.com/articles-for-parents-of-toddlers-2086650" target="_blank" rel="noopener noreferrer">Must Read
                        Articles for Parents of Toddlers</a></p>
                        <p><a id="res-link" href="https://www.fatherly.com/love-money/toddler-development-facts-for-parents" target="_blank" rel="noopener noreferrer">7
                        Facts of Toddler Development</a></p>
                    </div>
                    {/* <!-- <div className="col-lg-1"> --> */}
                    {/* <!-- </div> --> */}
                    <div className="col-lg-7">
                        <h5>Grade Schoolers</h5>
                        <p><a id="res-link" href="https://www.sesamestreet.org/toolkits/happyhealthy" target="_blank" rel="noopener noreferrer">Getting Ready for
                        School</a></p>
                        <p><a id="res-link" href="https://kidshealth.org/en/parents/school-help-elementary.html" target="_blank" rel="noopener noreferrer">10 Ways to Help
                        Your Child Succeed in Elementary School</a></p>
                        <p><a id="res-link"
                            href="https://www.scholastic.com/parents/school-success/school-success-guides/guide-to-1st-grade.html" target="_blank" rel="noopener noreferrer">The
                        Guide to First Grade</a></p>


                        <h5>Middle Schoolers</h5>
                        <p><a id="res-link"
                            href="https://www.familylife.com/articles/topics/parenting/ages-and-stages/tweens/30-tips-for-raising-middle-schoolers" target="_blank" rel="noopener noreferrer">30
                        Tips for Raising Middle Schoolers</a></p>
                        <p><a id="res-link"
                            href="https://yourteenmag.com/teenager-school/teenager-middle-school/middle-school-parenting" target="_blank" rel="noopener noreferrer">Parenting
                            Middle Schoolers</a></p>
                        <p><a id="res-link" href="https://kidshealth.org/en/parents/school-help-middle.html" target="_blank" rel="noopener noreferrer">10 Ways to Help
                            Your Child Succeed in Middle School</a></p>
                        <h5>Teenagers</h5>
                        <p><a id="res-link" href="https://yourteenmag.com" target="_blank" rel="noopener noreferrer">Your Teen Magazine for Parents</a></p>
                        <p><a id="res-link"
                            href="https://www.activebeat.com/your-health/children/10-tips-to-effectively-parent-difficult-teens/?utm_medium=cpc&utm_source=google&utm_campaign=AB_GGL_US_DESK-SearchMarketing&utm_content=g_c_191844713655&cus_widget=&utm_term=parents%20of%20teens&cus_teaser=kwd-90799785&utm_acid=3040947159&utm_caid=366485318&utm_agid=34104539238&utm_os=&gclid=Cj0KCQjwgezoBRDNARIsAGzEfe4TW8OnRUYQUq3Rzta6h3gf_GnnbetLXt6ZKDQtlns6lYjbjOO9vIsaAmaPEALw_wcB" target="_blank" rel="noopener noreferrer">10
                            Tips to Effectively Parent Difficult Teens</a></p>
                        <h5>LGBTQ+</h5>
                        <p><a id="res-link" href="https://www.glaad.org/resources/ally/8" target="_blank" rel="noopener noreferrer">COLAGE: Children of LGBT
                            Parents</a></p>
                        <p><a id="res-link"
                            href="https://everlastingadoptions.com/looking-to-adopt/resources/lgbtq-adoptions/?matchtype=b&network=g&device=c&adposition=1t1&keyword=%2Bgay%20%2Badoption&gclid=Cj0KCQjwgezoBRDNARIsAGzEfe5jgMK7Y12f2kDi2IY6Vo6FF0KvaiAo7R1xtIfb1SIvrOz-3gla9_QaAiMPEALw_wcB" target="_blank" rel="noopener noreferrer">LGBTQ+
                            Adoptions</a></p>
                        <p><a id="res-link" href="https://www.glaad.org/resources/ally/8" target="_blank" rel="noopener noreferrer">Resources for Parents of LGBT
                            Youth</a></p>
                        <h5>Special Needs</h5>
                        <p><a id="res-link"
                            href="https://www.bu.edu/fsao/resources/parenting-children-with-special-needs" target="_blank" rel="noopener noreferrer">Parenting
                            Children with Special Needs</a></p>
                        <p><a id="res-link"
                            href="https://www.gottman.com/blog/raising-exceptional-families-with-special-needs-children" target="_blank" rel="noopener noreferrer">Raising
                            Exceptional Families with Special Needs Children</a></p>
                        <p><a id="res-link"
                            href="https://www.autismspeaks.org/sites/default/files/2018-08/Parents%20Guide%20to%20Autism.pdf" target="_blank" rel="noopener noreferrer">A
                            Parent's Guide to Autism</a></p>
                        <p><a id="res-link"
                            href="https://www.bu.edu/fsao/resources/parenting-children-with-special-needs" target="_blank" rel="noopener noreferrer">Parenting a
                            Child with ADHD</a></p>

                    </div>

                </div>
            </div>

            <Footer />

            </div>

        );
    }
}

export default SignIn;
