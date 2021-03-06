$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});


/* Pencarian */

(function(document) {
    'use strict';

    var LightTableFilter = (function(Arr) {

        var _input;

        function _onInputEvent(e) {
            _input = e.target;
            var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
            Arr.forEach.call(tables, function(table) {
                Arr.forEach.call(table.tBodies, function(tbody) {
                    Arr.forEach.call(tbody.rows, _filter);
                });
            });
        }

        function _filter(row) {
            var text = row.textContent.toLowerCase(),
                val = _input.value.toLowerCase();
            row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
        }

        return {
            init: function() {
                var inputs = document.getElementsByClassName('light-table-filter');
                Arr.forEach.call(inputs, function(input) {
                    input.oninput = _onInputEvent;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
            LightTableFilter.init();
        }
    });

})(document);

/* pengiriman */

{
    "info": {
        "_postman_id": "2a4fb9cc-7ddf-4124-9b7e-2314c95d2054",
        "name": "Daerah Indonesia",
        "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
    },
    "item": [{ "name": "Provinsi", "item": [{ "name": "Get All", "_postman_id": "27264f77-9b8c-46aa-ae98-4d0f679c1f79", "request": { "method": "GET", "header": [], "url": "https://dev.farizdotid.com/api/daerahindonesia/provinsi" }, "response": [] }, { "name": "Detail Provinsi", "_postman_id": "c0366dab-d721-4f40-bb2e-96497027c9b7", "request": { "method": "GET", "header": [], "url": "https://dev.farizdotid.com/api/daerahindonesia/provinsi/32" }, "response": [] }], "_postman_id": "dcd50e3e-4bac-4ce6-8c13-03b651fa1dc4", "protocolProfileBehavior": {} }, { "name": "Kota / Kabupaten", "item": [{ "name": "Get All", "_postman_id": "936c3ff9-5cdc-42f8-ae0b-ad2948de06cb", "request": { "method": "GET", "header": [], "url": { "raw": "https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=32", "protocol": "https", "host": ["dev", "farizdotid", "com"], "path": ["api", "daerahindonesia", "kota"], "query": [{ "key": "id_provinsi", "value": "32" }] } }, "response": [] }, { "name": "Detail Kota / Kabupaten", "_postman_id": "83fcea64-9252-48fa-9c3e-ec99d5c9bd7b", "request": { "method": "GET", "header": [], "url": "https://dev.farizdotid.com/api/daerahindonesia/kota/3201" }, "response": [] }], "_postman_id": "e57b44ec-b6c8-4394-975c-d64ad9be0179", "protocolProfileBehavior": {} }, { "name": "Kecamatan", "item": [{ "name": "Get All", "_postman_id": "dbe3abf6-133f-450d-b3b6-d609105ec0e0", "request": { "method": "GET", "header": [], "url": { "raw": "https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=3214", "protocol": "https", "host": ["dev", "farizdotid", "com"], "path": ["api", "daerahindonesia", "kecamatan"], "query": [{ "key": "id_kota", "value": "3214" }] } }, "response": [] }, { "name": "Detail Kecamatan", "_postman_id": "43faf3ba-0470-4c0a-9d47-b1846345b0ee", "request": { "method": "GET", "header": [], "url": "https://dev.farizdotid.com/api/daerahindonesia/kecamatan/3214080" }, "response": [] }], "_postman_id": "1b0b8d7e-d7a8-487d-b44a-80ac3a84e29c", "protocolProfileBehavior": {} }, {
        "name": "Kelurahan",
        "item": [{
                "name": "Get All",
                "_postman_id": "83da4d3d-2cf7-4a02-b88b-652fa73a04a1",
                "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                        "raw": "https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=3214010",
                        "protocol": "https",
                        "host": ["dev", "farizdotid", "com"],
                        "path": ["api", "daerahindonesia", "kelurahan"],
                        "query": [{ "key": "id_kecamatan", "value": "3214010" }]
                    }
                },
                "response": []
            },
            { "name": "Detail Kelurahan", "_postman_id": "f96e408c-ffad-436a-9cc7-6eea5b21a8d0", "request": { "method": "GET", "header": [], "url": "https://dev.farizdotid.com/api/daerahindonesia/kelurahan/3214010006" }, "response": [] }
        ],
        "_postman_id": "3ffddcbd-3825-4a95-ae7b-36c505e05075",
        "protocolProfileBehavior": {}
    }],
    "protocolProfileBehavior": {}
}