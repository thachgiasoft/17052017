
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------


namespace ERP.Web.Models.Database
{

using System;
    using System.Collections.Generic;
    
public partial class MH_PO_CT_MUA_HANG
{

    public int ID { get; set; }

    public string MA_SO_PO { get; set; }

    public string MA_HANG { get; set; }

    public int SL { get; set; }

    public decimal DON_GIA_CHUA_VAT { get; set; }

    public decimal THANH_TIEN_CHUA_VAT { get; set; }

    public string THOI_GIAN_GIAO_HANG { get; set; }

    public string GHI_CHU { get; set; }

    public bool DA_NHAP_KHO { get; set; }

    public decimal GIA_BAN_RA { get; set; }

    public int ID_BAN_HANG { get; set; }



    public virtual BH_CT_DON_HANG_PO BH_CT_DON_HANG_PO { get; set; }

    public virtual HH HH { get; set; }

    public virtual MH_PO_MUA_HANG MH_PO_MUA_HANG { get; set; }

}

}
