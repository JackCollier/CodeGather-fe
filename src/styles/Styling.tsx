import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    borderWidth: 0.2,
    gap: 30,
    padding: 50,
    paddingVertical: 70,
    borderColor: "black",
    borderRadius: 2,
    marginBottom: 50,

    backgroundColor: "white",
  },
  text_input_label: {
    fontSize: 20,
    marginBottom: 7,
  },
  text_input: {
    padding: 3,
    minWidth: "75%",
    fontSize: 20,
    height: 40,
    borderColor: "#8cb3d9",
    borderRadius: 2,
    borderWidth: 0.5,
  },
  btn: {
    paddingHorizontal: 45,
    paddingVertical: 9,
    borderRadius: 2,
    borderWidth: 0.5,
    width: "75%",
    alignSelf: "center",
    borderColor: "#8cb3d9",
    backgroundColor: "#8cb3d9",
  },
  btn_text: {
    fontSize: 20,
    textAlign: "center",
  },
  row_space_between: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row_flex_start: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
