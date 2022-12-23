import React, { Component } from 'react';
import Cat from '../Cat';
import { AbyssCat, BengalCat, NebelungCat, BritishShortHairCat, BirmanCat, OciCat, BobtailCat, OrientalCat,
	PersianCat, PixieCat, PeterbaldCat, PussyCat, RagdollCat, RussianBlueCat, SavannahCat, SomaliCat, SelkirkCat,
	ScottishfoldCat, SerengetiCat, SiameseCat, SiberianCat, SingapuraCat, SnowShoeCat, SokokeCat, SphynxCat, ToygerCat, TurkishCat,
	BombayCat, Burmilla, MinskiCat, Munchkin, ManxCat, MainecoonCat, LapermCat, LampkiCatn, KoratCat, KinkalowCat, KhaoCat,
	JavaneseCat, HighlanderCat, HimalayanCat, EgyptianCat, CymricCat, CornishCat, ChausieCat, CatIconCat } from '../Icons/index';
import './styles.scss'


class Widget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientX: 0,
			clientY: 0,
		}
	}

	onMouseMove = (e) => {
		this.setState({ clientX: e.clientX, clientY: e.clientY });
	}
	componentDidMount() {
		document.addEventListener("mousemove", (e) => this.onMouseMove(e));
	}

	componentWillUnmount() {
		document.removeEventListener("mousemove", (e) => this.onMouseMove(e))
	}

	render () {
		const cats = [<AbyssCat />, <BengalCat />, <BobtailCat />, <BombayCat />, <BirmanCat />, <BritishShortHairCat />,
			<NebelungCat />, <OrientalCat />, <PersianCat />, <PixieCat />, <PeterbaldCat />, <PussyCat />, <RagdollCat />,
			<RussianBlueCat/>, <SavannahCat/>, <SomaliCat/>, <SelkirkCat/>, <ScottishfoldCat />, <SerengetiCat />,
			<SiameseCat />, <SiberianCat/>, <SingapuraCat />, <SnowShoeCat/>, <SokokeCat/>, <SphynxCat/>, <ToygerCat />,
			<TurkishCat />, <OciCat />, <Burmilla />, <MinskiCat />, <Munchkin />, <ManxCat />, <MainecoonCat />, <LapermCat />,
			<LampkiCatn />, <KoratCat />, <KinkalowCat />, <KhaoCat />, <JavaneseCat />, <HighlanderCat />, <HimalayanCat />,
			<EgyptianCat />, <CymricCat />, <CornishCat />, <ChausieCat />, <CatIconCat /> ];

		return (
			<div className='widget'>
				{cats.map((cat,index) => (
					<Cat
						key={index}
						clientX={this.state.clientX}
						clientY={this.state.clientY}
					>
						{cat}
					</Cat>
				)) }
				<audio controls autoPlay loop>
					<source src="./audio/meow.mp3" type="audio/mp3" />
				</audio>
			</div>
		)
	}
}

export default Widget;