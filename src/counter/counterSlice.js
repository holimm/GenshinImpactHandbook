import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        muteState: true,
        menuState: false,
        selectorState: null,
        models: [
            {
            name: 'Higokumaru',
            game: 'Honkai Impact',
            id: '0e903387170846f5939adaa0c277b91b',
            image: 'https://cdnb.artstation.com/p/assets/images/images/036/729/093/large/andrew-cao-higofinal.jpg',
            content: `Higokumaru is a minor heroine from the "Sakura Samsara" side story from the videogame Honkai Impact 3rd, Higokumaru is a young girl with the apperance of a kitsune (Humanoid Fox), who constantly appears alogside Sakura Yae acting like her "little sister". \
            <br><br> In her current form, Higokumaru looks like a chibified version of her normal apperance, when her stigmata is activated, Higokamaru now sport a more human-like form, She has a white and red hair, as a forms of clothing, She sports a red and white outfit not to different from the one used by Sakura. \
            <br><br> Higokumaru is a rather odd but quite tragic character, She is somewhat kind and pacient towards Sakura and constantly called her "Sister" but in other hand, She was used as a tool for the Herrscher of Erosion, Higokumaru, is also somewhat remorseful about her past misdeeds and wanted to atone, helping Sakura to be freed from the beast influence.`
            },
            {
            name: 'Mendeleev',
            game: 'Honkai Impact',
            id: '1446f242c68443069b020ede7376cec5',
            image: 'https://cdnb.artstation.com/p/assets/images/images/037/842/173/large/andrew-cao-mendeleev-final2.jpg',
            content: 'No Article Found'
            },
            {
            name: 'Ningguang',
            game: 'Genshin Impact',
            id: '9344fa6424cc486199f4d9aa9c41e141',
            image: 'https://cdnb.artstation.com/p/assets/images/images/048/471/917/large/agni-rakai-sahakarya-0040.jpg',
            content: `Ningguang is one of the "Liyue Qixing," lethally perceptive and a sharp talker to boot. In the grand marketplace that is Liyue, Ningguang is second to none.
            <br><br>Everyone who meets Ningguang becomes awe-inspired by her exemplary insight and remarkable smarts. On top of that, her style is one of a kind.
            <br><br>She invested an astronomical amount into purchasing up huge volumes of Plaustrite, a type of rock with levitation properties. With this, she was able to build a resplendent residence in the sky above Liyue, known as the Jade Chamber.
            <br><br>Her chamber is much like Ningguang herself — beyond measure, above the masses, and draws attention from all.
            <br><br>Despite being a mogul who shakes the very foundations of business circles, she is adored by the children of Liyue like an older sister. A socialite at Yujing Terrace banquets and a connoisseur in the world of desserts, she remains Liyue's most beautiful, unsolvable enigma.`
            },
            {
            name: 'Zhongli',
            game: 'Genshin Impact',
            id: '32683634e31c4361a7dfbaf50ee4fccd',
            image: 'https://cdna.artstation.com/p/assets/images/images/043/634/232/large/jw_han-2-beautyshot-1-resize.jpg',
            content: `Wangsheng Funeral Parlor Consultant
            <br><br>Wangsheng Funeral Parolor's mysterious consultant. Handsome, elegant, and surpassingly learned.
            <br><br>Though no one knows where Zhongli is from, he is a master of courtesy and rules. His grasp of Liyue's traditions is superior to that of any scholar. From his seat at Wangsheng Funeral Parlor, he performs all manner of rituals. Proper clothing, auspicious timing, locations and appliances, observances and regulations, all such things can be left in his hands without a care.  
            <br><br>But though he is a man of such particularity, he never has a Mora to his name. Trade requires capital, and transport demands payment, and yet Zhongli has no such thing on him — for in the end, someone else will always foot the bill.
            <br><br>He will attend the most celebrated performances, and be accompanied by the loveliest thrushes. His behavior is immaculate in every way, save for the matter of money. Those around him have long gotten used to his eccentricities, and do not take this matter to heart. If you ask him, he will say: "Is that so? I don't recall anyone ever taking issue with me concerning money."
            <br><br>Money for goods — that is the norm. How could someone living in this world not comprehend its fundamental truths?
            <br><br>Has the passage of too many years eroded his sense of mortal trivialities? Or does he see his voyage through this world as though it were a stroll amongst the clouds?`,
            }
        ],
        models_detail: null,
        models_detail_visible: false,
    },
    reducers: {
        setMuteState: (state)=>{
            state.muteState = !state.muteState;
            state.menuState = '';
        },
        setMenuState: (state,bool)=>{
            if(bool.payload){state.menuState = false;}
            else {state.menuState = true;}
        },
        setSelectorState: (state,selected)=>{
            if(selected.payload!=null){state.menuState = false; state.selectorState = selected.payload}
            else {state.menuState = true; state.selectorState = null}
        },
        setModelsDetail: (state,item)=>{           
            if(item.payload!==null){
                state.selectorState = null; state.menuState=false;
                state.models_detail={name: item.payload.name,game:item.payload.game,id:item.payload.id,image:item.payload.image,content:item.payload.content};
                state.models_detail_visible=true;
            }
            else{
                state.selectorState = state.models_detail.game; state.menuState=false;
                state.models_detail=null;
                state.models_detail_visible=false;
            }
        },
    },
})

export const { setMuteState, setMenuState, setSelectorState, setModelsDetail } = counterSlice.actions;
export default counterSlice.reducer;