$( '.main-sidebar' ).ready(function() {
  var new_els = ["welcome", "client_counts"]
  new_els.map(function(id) {
    var checkExist = setInterval(function() {
   if ($('#'+"tab-"+ id).length) {
      var el = $("#tab-" + id)
      el.children("i.fa").addClass('text-success')
      if (id.match('^qpr|^dq'))
        var a = el.parents(".nav-item.has-treeview").find("i.fa").first().addClass('text-success')
      clearInterval(checkExist);
   }
}, 100); 
  })
})
/*
 "coc_competition","ceaps", "covid19", "utilization", "qpr_spm", "qpr_community_need", "qpr_length_of_stay", "qpr_permanent_housing", "qpr_noncash_benefits", "qpr_health_insurance", "qpr_income_growth", "qpr_rrh_placement", "qpr_rrh_spending", "about"
 */