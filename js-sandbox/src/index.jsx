import React, {Component} from "react";
import ReactDOM from "react-dom";
//import ArticleComponent from './component/ArticleComponent';
import NavComponent from './component/NavComponent';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';



const myWebData = [{
    id: 1,
    label: "HOME",
    link: "#",
    title: "HOME",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur inceptos ornare rhoncus, ante platea at tellus ullamcorper mauris ultricies facilisis eros dictum class consequat, luctus euismod venenatis vestibulum sociosqu parturient varius ligula mattis dui. Rhoncus pellentesque elementum cras porta eu sollicitudin nostra cursus, nullam convallis morbi faucibus facilisi aptent ad magna, at malesuada nibh proin nisl diam primis. Fusce massa senectus arcu tincidunt maecenas penatibus commodo a, dapibus luctus cubilia ut aliquet dis felis, imperdiet himenaeos odio eleifend montes condimentum aliquam.\n" +
        "\n" +
        "Primis platea fermentum pharetra feugiat interdum facilisis id, a habitant venenatis ante dui nascetur lectus, augue ad sapien egestas lobortis torquent. Magnis arcu ante lacinia lectus nibh, diam dictumst proin rhoncus ullamcorper, convallis primis est dictum. Egestas vel integer aliquet hac habitasse suspendisse donec fringilla, aenean augue hendrerit potenti ut nam platea, tempus quisque cubilia ligula auctor tortor nunc.\n" +
        "\n" +
        "Nam bibendenaeos convallis tempus nunc elementum neque eleifend felis, commodo diam ornare nulla mus aptent augue erat habitasse. Taciti congue viverra praesent condimentum primis proin facilisis sapien quam, neque gravida tellus ultrices mauris suscipit nam non. Eget mauris id mollis urna porttitor nullam ullamcorper lacus fringilla, suspendisse habitant ligula vehicula lobortis ante aliquam velit cum egestas, aliquet tempor tristique quis neque curabitur tellus dapibus.\n" +
        "\n" +
        "A vulputate class pulvinar arcu dictumst vel tellus nibh inceptos integer, fames ultricies lacus faucibus cursus nunc per pellentesque dictum dapibus senectus, morbi libero eu tempus ac metus sodales elementum est. Dignissim lobortis interdum pulvinar magna vitae aptent posuere metus quisque eros, purus morbi fusce faucibus nunc nullam parturient ornare sodales. Egestas varius porta vel habitasse ornare luctus purus conubia posuere auctor pulvinar, penatibus at platea per tincidunt fusce feugiat nullam maecenas. Non feugiat facilisi varius nec felis ad ac praesent dis cursus, integer hendrerit velit lobortis conubia quisque parturient diam urna aliquet pellentesque, vitae proin laoreet suspendisse sagittis egestas blandit tristique nisl."
}, {
    id: 2,
    label: "CONTACT",
    link: "#",
    title: "MY CONTACT",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur inceptos ornare rhoncus, ante platea at tellus ullamcorper mauris ultricies facilisis eros dictum class consequat, luctus euismod venenatis vestibulum sociosqu parturient varius ligula mattis dui. Rhoncus pellentesque elementum cras porta eu sollicitudin nostra cursus, nullam convallis morbi faucibus facilisi aptent ad magna, at malesuada nibh proin nisl diam primis. Fusce massa senectus arcu tincidunt maecenas penatibus commodo a, dapibus luctus cubilia ut aliquet dis felis, imperdiet himenaeos odio eleifend montes condimentum aliquam.\n" +
        "\n" +
        "Primis platea fermentum pharetra feugiat interdum facilisis id, a habitant venenatis ante dui nascetur lectus, augue ad sapien egestas lobortis torquent. Magnis arcu ante lacinia lectus nibh, diam dictumst proin rhoncus ullamcorper, convallis primis est dictum. Egestas vel integer aliquet hac habitasse suspendisse donec fringilla, aenean augue hendrerit potenti ut nam platea, tempus quisque cubilia ligula auctor tortor nunc.\n" +
        "\n" +
        "\n" +
        "A vulputate class pulvinar arcu dictumst vel tellus nibh inceptos integer, fames ultricies lacus faucibus cursus nunc per pellentesque dictum dapibus senectus, morbi libero eu tempus ac metus sodales elementum est. Dignissim lobortis interdum pulvinar magna vitae aptent posuere metus quisque eros, purus morbi fusce faucibus nunc nullam parturient ornare sodales. Egestas varius porta vel habitasse ornare luctus purus conubia posuere auctor pulvinar, penatibus at platea per tincidunt fusce feugiat nullam maecenas. Non feugiat facilisi varius nec felis ad ac praesent dis cursus, integer hendrerit velit lobortis conubia quisque parturient diam urna aliquet pellentesque, vitae proin laoreet suspendisse sagittis egestas blandit tristique nisl."
}, {
    id: 3,
    label: "SHOP", link: "#",
    title: "SHOP",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum etetur adipisicing elit. A asperiores cum excepturi exercitationem iste labore laborum libero, necessitatibus numquam obcaecati officiis placeat rem reprehenderit sed voluptatum. Atque autem consequatur, corporis debitis deserunt error et excepturi exercitationem fuga hic incidunt, iure libero molestias, obcaecati odio pariatur praesentium quia quibusdam rerum sequi sunt tempora tempore vel vero voluptatum. Aspernatur, aut dolor eos ex omnis quis quod ut? Asperiores aspernatur eaque, facere fugiat incidunt iure molestiae nam nesciunt pariatur, possimus praesentium qui quia, quod sequi sint voluptates voluptatum? Aut dolorum harum hic non, numquam omnis qui. Ad at blanditiis consequatur doloremque, eligendi mollitia quam reprehenderit velit veritatis voluptatem. Commodi cumque fuga iure sapiente voluptates. Aliquid culpa dolores ea iste laborum laudantium, maxime minus, nesciunt optio perspiciatis praesentium quaerat repellat reprehenderit sapiente voluptatem. A dicta doloremque harum iure non porro voluptas? Delectus ducimus exercitationem explicabo fuga fugit id ipsa iste iure neque numquam porro possimus, quaerat qui ratione sint, temporibus veniam. Animi culpa cupiditate dicta dolorum expedita hic ipsam iure nihil, quidem voluptate? Aperiam cupiditate eaque illum, itaque, libero minus, nobis nostrum numquam provident qui quidem quis rem sunt. Atque eum neque perspiciatis sapiente sunt! Ad cum mollitia, nam quo similique tempora. Ab aliquid commodi dolorum error expedita facere fugit id impedit molestiae natus nisi qui quidem, sed similique vitae. Alias asperiores aspernatur aut dignissimos expedita incidunt inventore necessitatibus nulla odit praesentium quaerat quisquam, quo rem unde voluptate. Ad adipisci corporis cupiditate deleniti eos ipsum iste mollitia nostrum, officia praesentium, sapiente ullam, vel voluptatem? Accusantium adipisci consectetur deleniti dignissimos, doloribus eum, iure magni modi mollitia rem, totam voluptas? Itaque neque quaerat voluptatem. A accusantium ad aliquam amet, animi architecto consectetur consequatur dicta distinctio dolorem eaque esse ex facere fugiat id in ipsum itaque iusto laudantium mollitia necessitatibus neque odio odit officiis, porro quam quidem quo repellat saepe sed suscipit tempore temporibus tenetur ut vitae, voluptas voluptatem? Consequuntur deleniti distinctio ducimus harum molestias natus porro rerum ullam ut voluptas? Ab at delectus dicta dolore eius eos exercitationem in neque reiciendis. Fugiat nam necessitatibus optio? A ad autem consequatur culpa deleniti, dignissimos doloribus ducimus earum ex id natus nisi non numquam pariatur possimus quam qui quia recusandae repellendus rerum similique sunt tenetur veniam. Assumenda atque, commodi consectetur, delectus dolore dolorem maiores minus nihil quae quam quis sed tempore vel velit voluptatem! Delectus dolorum ducimus eos itaque veritatis. Autem ex nostrum tempore! Ab asperiores assumenda consectetur culpa dicta eius fugiat laboriosam neque, nisi odio quam recusandae sequi vel. Accusantium adipisci, alias aut culpa dicta dolores eaque eius enim eum illum mollitia nemo quae quaerat. Ad consequatur corporis dignissimos exercitationem fugit ipsum laboriosam, modi nihil pariatur perferendis quaerat quas rerum vel. Adipisci at atque dignissimos ea ex explicabo, illum, itaque laborum libero maxime minus, molestiae natus possimus ratione repellendus temporibus voluptates. Ad aliquam, corporis culpa cumque doloribus dolorum ea eius, est fugiat illum incidunt inventore ipsam iure iusto maxime minima mollitia non odit officiis pariatur praesentium quas qui, quis quo quod quos reprehenderit repudiandae tempora tenetur velit. Accusantium ad animi architecto atque consequuntur cum cupiditate ea ipsum magnam, maiores maxime minus modi, neque nesciunt nisi omnis optio porro quas quisquam quos reiciendis, repellat repudiandae sequi sint voluptas? Aliquid architecto dignissimos dolor doloremque ducimus error fugit hic laborum quidem. Accusamus accusantium adipisci aperiam consectetur corporis cumque delectus doloribus enim facere fugiat in inventore itaque nam natus officia omnis optio perferendis perspiciatis placeat porro provident quam quia quibusdam quidem rem repudiandae sapiente sint suscipit tenetur totam, ullam ut vero voluptates. Commodi deleniti explicabo pariatur quam quasi recusandae saepe voluptates! Animi atque autem culpa eaque, earum eligendi eos error id illum in inventore iure iusto libero magnam maiores necessitatibus nemo quae quasi, quia quod saepe, vitae voluptas voluptatibus? Architecto dolores et facere ipsa minima quasi reprehenderit tempore. Adipisci, at cumque dolorum ex facere fuga ipsa ipsam magnam maxime modi necessitatibus nisi placeat quaerat rem temporibus totam veritatis! Eos qui sint totam ullam voluptate. Assumenda atque ducimus eos error eveniet expedita inventore ipsa, mollitia nisi nostrum, obcaecati porro quaerat quia quos repellat soluta voluptas voluptate? Alias aperiam, asperiores corporis dignissimos error explicabo labore nemo, obcaecati odio quaerat quisquam reiciendis sit sunt. Architecto commodi cum dolor doloremque id itaque maxime minima natus totam voluptatibus. Accusantium deleniti esse fugit, harum in sint voluptatem. Consequatur maiores porro quaerat quasi reiciendis suscipit veritatis, voluptatum. Aperiam asperiores blanditiis consequuntur dicta dolorem, ea eligendi facere fuga incidunt, ipsam nam odio porro rem repellendus reprehenderit similique sint soluta. Adipisci aliquid atque commodi, consequatur culpa cupiditate debitis distinctio dolores, fugit incidunt mollitia neque nulla officia pariatur placeat quod reiciendis sapiente unde vero voluptatum. Animi architecto at commodi consectetur consequuntur cupiditate dicta dolorum ducimus earum eos ex in inventore iste minus mollitia obcaecati officia officiis porro quia repellendus, reprehenderit rerum sequi. Esse expedita hic iste labore magni nihil placeat rerum, voluptate!"

}];

class MyWebApp extends Component {
    constructor(props) {
        super(props);
        this.state = {currentId: 1};
        this._changeSelection = this._changeSelection.bind(this);

    }

    _changeSelection(id) {
        if (id !== undefined) {
            this.setState({currentId: id});
        }
    }

    _getElement(i) {
        if (i !== undefined) {
            for (let q = 0; q < myWebData.length; q++) {
                if (myWebData[q].id === i) {
                    return myWebData[q];
                }
            }
        }
        return {title: 404, content: "PIPO"};
    }

    render() {

        const content = this._getElement(this.state.currentId);
        return <React.Fragment>

            <main className={"row"}>
                <div className="col-12">

                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/"><h2>MY WEB</h2></NavbarBrand>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem >
                                    <NavComponent href="/" navbar={myWebData}
                                                  onclick={this._changeSelection}/>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>


                    <div align="center">
                        <h1>{content.title}</h1>
                    </div>
                    <p>{content.content}</p>
                </div>
            </main>

            <div align="center">
                <footer className="align-content-center"><h2>FOOTER TO CHULO DE MI PAGINA</h2></footer>
            </div>
        </React.Fragment>;
    }
}


ReactDOM.render(

    <div className="container">
        <MyWebApp/>
    </div>,

    document.getElementById('app')
);

