function createLink() {
    if (
        create_form.create_name.value &&
        create_form.create_ip.value &&
        create_form.create_port.value
    ) {
        var link =
            "https://addserver.TDSB.net/?name=" +
            create_form.create_name.value +
            "&ip=" +
            create_form.create_ip.value +
            "&port=" +
            create_form.create_port.value;
        result_form.result.value = link;
    } else {
        alert("サーバー名、IP、アドレスの全てを入力してください");
    }
}
