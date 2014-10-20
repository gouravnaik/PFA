class Pet < ActiveRecord::Base
	attr_accessible :name, :color, :sterilized, :tax, :dob, :tax_paid_on, :medical_history, :age, :customer_id
	belongs_to :customer   

	def self.search(search)
		if search
			where('lower(name) LIKE ?', "%#{search}%".downcase)
		end
	end
end
