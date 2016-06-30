using ASP.BL.Constants;
using Common.Resources;
using System.ComponentModel.DataAnnotations;

namespace ASP.BL.Models
{
    public class UserModel
    {

        public int? UserId { get; set; }

        //[Required]
        [Display(Name = "First_name", ResourceType = typeof(Titles))]
        [StringLength(RangeConstants.MaxNameLength, MinimumLength = RangeConstants.MinNameLength)]
        public string FirstName { get; set; }

        //[Required]
        [Display(Name = "Last_name", ResourceType = typeof(Titles))]
        [StringLength(maximumLength: RangeConstants.MaxNameLength, MinimumLength = RangeConstants.MinNameLength)]
        public string LastName { get; set; }

        //[Required]
        [Display(Name = "Email", ResourceType = typeof(Titles))]
        [EmailAddress]
        [StringLength(RangeConstants.MaxEmailLength, MinimumLength = RangeConstants.MinEmailLength)]
        public string Email { get; set; }
    }
}
