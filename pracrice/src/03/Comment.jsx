import React from "react";

const style = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRedius: 16,
    },
    impageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        FontSize: 16,
    },
}

function Comment(props){
    return (
        <div style={styles.wrapper}>
            <div style={styles.impageContainer}>
                <img 
                    src="https://i.namu.wiki/i/mgLmSPYsYXWpaXfvpxhIMS1FIpNpqAtbNHLCRUgaeTpbb8ADFxwYWRhBdCB9PDNmvnoFxCdtxlTKMQnlTHDrE7DvpKD_VL8tLcoZj-lWbcVSn0u02-33towiHfp318uYllZCPShl4N0-XNjqP8rq5Q.webp">
                    style={styles.image}
                </img>
            </div>
            <div style={styles.contentContainer}>
                <span style={style.nameText}>이인제</span>
                <span style={styles.commentText}>
                    제가 만든 첫 컴포넌트입니다.
                </span>
            </div>
        </div>
    );
}

export default Comment; 