<script setup>
import { ref, computed, watch } from "vue";

const user = ref({
	name: "Sheikh Raihan Al Saleh",
	profileImage: "/p_pic.png",
	birthdate: "2000-02-15",
	email: "Raihan@gmai.com",
	description: "N/A",
});

const userAge = computed(() => {
	const birthYear = new Date(user.value.birthdate).getFullYear();
	const currentYear = new Date().getFullYear();
	return currentYear - birthYear;
});

const birthYear = computed(() => {
	return new Date(user.value.birthdate).getFullYear();
});

const votingEligibilityMessage = computed(() => {
	if (userAge.value >= 18) {
		return "Eligible for voting";
	} else {
		return "Not eligible for voting";
	}
});

watch(userAge, (newAge) => {
	if (newAge >= 18) {
		user.value.votingEligibilityMessage = "Eligible for voting";
	} else {
		user.value.votingEligibilityMessage = "Not eligible for voting";
	}
});
</script>

<template>
	<div class="container">
		<div class="row col-md-12 my-5">
			<div class="card col-md-6 mx-auto">
				<div class="card-header">
					<h1 class="text-center">User Details</h1>
				</div>
				<div class="card-body bg-light text-center">
					<img
						:src="user.profileImage"
						alt="User Profile"
						style="width: 30%; height: 40%" />
					<div class="mt-3">
						<input
							class="form-control"
							v-model="user.name"
							id="name"
							placeholder="Name" />
					</div>
					<div>
						<input
							class="form-control"
							type="date"
							v-model="user.birthdate"
							id="birthdate" />
					</div>
					<div>
						<input
							class="form-control"
							v-model="user.email"
							id="email"
							placeholder="Email" />
					</div>
					<div>
						<textarea
							class="form-control"
							v-model="user.description"
							id="description"
							placeholder="Description"></textarea>
					</div>
				</div>
			</div>
			<div class="card col-md-6 mx-auto">
				<div class="card-header">
					<h2 class="text-center">Voting Eligibility Status</h2>
				</div>
				<div class="card-body bg-light text-center">
					<p>Birth Year: {{ birthYear }}</p>
					<p>Age: {{ userAge }} years old</p>
					<p style="font-size: 20px;" class="badge badge-success">{{ votingEligibilityMessage }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
