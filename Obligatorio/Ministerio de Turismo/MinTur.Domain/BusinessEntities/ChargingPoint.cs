using System;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using MinTur.Exceptions;

namespace MinTur.Domain.BusinessEntities
{
    public class ChargingPoint
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int RegionId { get; set; }
        [Required]
        public Region Region { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Indetifier { get; set; }

        public void Validate()
        {
            ValidateName();
            ValidateRegion();
            ValidateAddress();
            ValidateDescription();
            ValidateIdentifier();
        }

        private void ValidateRegion()
        {
            if (this.RegionId == 0)
            {
                throw new InvalidRequestDataException("Charging point must belong to a region");
            }
        }

        private void ValidateDescription()
        {
            if (String.IsNullOrEmpty(this.Description) || this.Description.Length > 30)
                throw new InvalidRequestDataException("Must provide a description shorter than 30 letters");
        }

        private void ValidateName()
        {
            if (String.IsNullOrEmpty(this.Name) || this.Name.Length > 20)
                throw new InvalidRequestDataException("Must provide a name shorter than 20 letters");
        }
        private void ValidateAddress()
        {
            if (String.IsNullOrEmpty(this.Address) || this.Address.Length > 60)
                throw new InvalidRequestDataException("Must provide a description shorter than 30 letters");
        }
        private void ValidateIdentifier()
        {
            if (!Regex.IsMatch(this.Indetifier, @"^\d+$") && this.Indetifier.Length != 4)
                throw new InvalidRequestDataException("Must provide a description shorter than 60 letters");
        }

    }
}