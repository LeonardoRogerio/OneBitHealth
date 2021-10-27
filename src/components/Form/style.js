import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    formContext: {
        flex:1,
        width: "100%",
        height: "100%",
        backgroundColor: "#026c7a",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "white",
        fontSize: 18,
        paddingLeft: 20,

    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#0aacc2",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,

    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#ffffff",
    },
    errorMessage: {
        fontSize: 12,
        color: "#7affe9",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exhibitionResultImc: {
        width: "80%",
        height: "50%",
    },
    resultImcItem: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        width: "100%",
        height: 50,
        paddingRight: 10,
        marginTop: 30,
    }
    
});

export default styles