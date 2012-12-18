            (function ($) {
                var populate_jobs = function (node, jobs) {
                var gallerylen = 0;
                $.each(jobs, function (idx, job) {
                    node.append('<li id="' + job.status + '" class="alert alert-' + job.status + '"><a href="' + job.url + '">' + job.title + '</a><br />Client Name: ' + job.client + '</li>');
                })
            }
                $(document).ready(function () {
                    $.getJSON('json/jobs.json', {}, function (data) {
                        populate_jobs($('#jobsqueue'), data)
                        $('#jobsqueue').sortable().disableSelection();
                    });
                    $('#jobdone').toggle(function(event) {
                            $("li[id*='success']").each(function () {
                                $(this).hide('slow');
                            });
                        }, function (event) {
                                $("li[id*='success']").each(function () {
                                    $(this).show('slow');
                                });
                        });
                    $('#jobundone').toggle(function(event) {
                            $("li[id*='error']").each(function () {
                                $(this).hide('slow');
                            });
                        }, function (event) {
                                $("li[id*='error']").each(function () {
                                    $(this).show('slow');
                                });
                        });
                    });
            })(jQuery);

