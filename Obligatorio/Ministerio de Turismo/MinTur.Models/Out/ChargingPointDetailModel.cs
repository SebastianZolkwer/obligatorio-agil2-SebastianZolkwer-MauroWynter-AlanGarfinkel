using MinTur.Domain.BusinessEntities;

namespace MinTur.Models.Out
{
    public class ChargingPointDetailModel
    {
        public int Id { get; set; }
        public int RegionId { get; set; }
        public string Name { get; set; }
        public string Indetifier { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }

        public ChargingPointDetailModel(ChargingPoint chargingPoint)
        {
            Id = chargingPoint.Id;
            RegionId = chargingPoint.RegionId;
            Name = chargingPoint.Name;
            Indetifier = chargingPoint.Indetifier;
            Address = chargingPoint.Address;
            Description = chargingPoint.Description;
        }
    }
}