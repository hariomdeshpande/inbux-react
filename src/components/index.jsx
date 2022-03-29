import Layout from "./layout";
import Footer from "./layout/footer";
import Main from "./main";

export default function ComponentsDirectory(){
    return(
    <div style={{'backgroundColor':'rgba(65,65,65,.1)'}}>
        <Layout></Layout>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
}