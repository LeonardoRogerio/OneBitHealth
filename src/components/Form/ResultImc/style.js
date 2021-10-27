import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 20,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    numberImc:{
        fontSize: 48,
        color: "white",
        fontWeight: "bold",
    },
    information: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },
    shared:{
        backgroundColor: "#0aacc2",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },
    sharedText:{
        color: "white",
        fontWeight: "bold",
        paddingHorizontal: 40,
        paddingVertical: 5,
    },
});

export default styles