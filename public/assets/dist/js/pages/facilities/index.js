$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $("meta[name='csrf-token']").attr("content"),
    },
});

const table = $("#example1").DataTable({
    lengthMenu: [
        [10, 25, 50, 100, 500, -1],
        [10, 25, 50, 100, 500, "All"],
    ],
    searching: false,
    responsive: true,
    lengthChange: true,
    autoWidth: false,
    order: [],
    pagingType: "full_numbers",
    language: {
        search: "_INPUT_",
        searchPlaceholder: "Cari...",
        processing:
            '<div class="spinner-border text-info" role="status">' +
            '<span class="sr-only">Loading...</span>' +
            "</div>",
        paginate: {
            Search: '<i class="icon-search"></i>',
            first: "<i class='fas fa-angle-double-left'></i>",
            previous: "<i class='fas fa-angle-left'></i>",
            next: "<i class='fas fa-angle-right'></i>",
            last: "<i class='fas fa-angle-double-right'></i>",
        },
    },
    oLanguage: {
        sSearch: "",
    },
    processing: true,
    serverSide: true,
    ajax: {
        url: `${url}/admin/facilities/dataTable`,
        method: "POST",
        data: function (d) {
            d.name = $('input[name="name"]').val();
            d.date = $('input[name="date"]').val();
            d.status = $('select[name="status"]').val();
            return d;
        },
    },
    columns: [
        {
            name: "created_at",
            data: "DT_RowIndex",
        },
        {
            name: "name",
            data: "content",
            orderable: false,
        },

    ],
});

$('#filterName').on('keyup', function() {
    table.draw();
});

$('#filterDate').on('change', function() {
    table.draw();
});

$('#filterStatus').on('change', function() {
    table.draw();
});


table.on("click", ".btn-hapus", function (e) {
    e.preventDefault();
    const id = $(this).data("id");
    const nama = $(this).data("title");
    const urlTarget = `${url}/admin/facilities/${id}`
    deleteDataTable(nama, urlTarget, table)
});


$(function() {
    $('.btnAdd').on('click', function() {
        $('#modalInput').modal('show');
    });

    table.on('click', '.btnEdit', async function() {
        const form = $('#submitInput');
        const modal = $('#modalInput');
        const id = $(this).data('id');

        modal.modal('show');
        modal.find('.modal-body')
                .append(`<div class="spinner-border text-primary" role="status" style="
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        z-index: 9999;">
                    <span class="sr-only">Loading...</span>
                </div>`)



        try {
            const result = await sendData(`${url}/admin/bout-us/${id}/edit`);
            if(result.status == 'success') {
                modal.find('.spinner-border').remove();
                const data = result.data;
                form.find('[name="id"]').val(data.id);
                form.find('[name="name"]').val(data.name);
                form.find('[name="status"]').val(data.status);
                form.find('.img-preview#foto').attr('style', `background-image: url(${url}/${data.foto})`);
            }else {
                modal.find('.spinner-border').remove();
                Swal.fire(`Gagal`, result.message, "error");
            }

        }catch(err) {
            modal.find('.spinner-border').remove();
            Swal.fire(`Gagal`, "Gagal mengambil data", "error");
        }
    });

    $('#submitInput').on('change', function() {
        checkValue();
    }).on('keyup', function() {
        checkValue();
    }).on('submit', async function(e) {
        e.preventDefault();
        const buttonSubmit = $('#submitBtn');
        buttonSubmit.attr('disabled', true);
        buttonSubmit.html('Loading...');
        const data = new FormData(this);

       const result = await sendDataFile(`${url}/admin/facilities`, 'POST', data);
        if (result.status == 'success') {
            buttonSubmit.attr('disabled', false).html('Simpan');
            $('#modalInput').modal('hide');
            table.draw();
            Swal.fire(`Berhasil disimpan`, result.message, "success");
        }else {
            buttonSubmit.attr('disabled', false).html('Simpan');
            Swal.fire(`Gagal`, result.message, "error");
        }
    });

    $('#modalInput').on('hide.bs.modal', function (e) {
        const form = $(this).find('#submitInput');
        form.find('[name="id"]').val('');
        form.find('.img-preview#foto').attr('style', '');
        form.trigger('reset');
    });

    function checkValue() {
        const submitBtn = $('#submitBtn');
        const name = $('#name').val();
        const status = $('#status').val();
        var foto = $('[name="foto"]').val();
        const edit = $('[name="id"]').val();

        if(edit)
            foto = 'image';

        if (name == '' || status == '' || foto == '') {
            if(edit != '')
                submitBtn.attr('disabled', true);
        } else {
            submitBtn.attr('disabled', false);
        }
    }
})
